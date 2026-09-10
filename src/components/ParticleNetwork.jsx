import { useEffect, useRef } from 'react';

export default function ParticleNetwork({ children }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray;
    let animationFrameId;

    // Menyesuaikan ukuran canvas dengan layar
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', () => {
      setCanvasSize();
      init();
    });

    // Class Partikel
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#00fff7';
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      const numberOfParticles = window.innerWidth < 768 ? 30 : 90; 

      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 0.5;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.8) - 0.4;
        let directionY = (Math.random() * 0.8) - 0.4;
        let color = '#00fff7';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      // 1. OPTIMASI: Hitung batas jarak SEKALI SAJA di luar loop
      const maxDistance = (canvas.width / 10) * (canvas.height / 10);
      
      // 2. OPTIMASI: Tetapkan ketebalan garis SEKALI SAJA di luar loop
      ctx.lineWidth = 1; 

      for (let a = 0; a < particlesArray.length; a++) {
        // 3. OPTIMASI: b dimulai dari 'a + 1' (mencegah partikel menghitung jarak ke dirinya sendiri dan mencegah garis digambar 2 kali)
        for (let b = a + 1; b < particlesArray.length; b++) { 
          
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = dx * dx + dy * dy; // Rumus Pythagoras tanpa akar (jauh lebih cepat)
          
          if (distance < maxDistance) {
            // 4. OPTIMASI: Bagi distance dengan maxDistance agar opacity selalu akurat
            const opacityValue = 1 - (distance / maxDistance);
            
            // 5. OPTIMASI: Abaikan opacity di bawah 0.05 karena mata tidak bisa melihatnya
            // Menghemat ribuan proses rendering garis tak kasat mata
            if (opacityValue > 0.05) {
              ctx.strokeStyle = `rgba(0, 255, 247, ${opacityValue})`;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      // --- LOGIKA BARU: MATIKAN PARTIKEL JIKA MODE CLEAN/PRO AKTIF ---
      // Ini akan menghentikan seluruh hitungan matematika partikel, 
      // sehingga website menjadi sangat ringan di CPU saat Pro Mode.
      if (document.body.classList.contains('clean-mode')) {
        ctx.clearRect(0, 0, innerWidth, innerHeight); // Hapus canvas hingga bersih
        return; // Hentikan fungsi di sini, partikel berhenti.
      }
      // ---------------------------------------------------------------

      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    setCanvasSize();
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      
      {/* 
        Wadah Absolut:
        Membentang dari About sampai Footer. Fungsinya mengunci area kerja partikel.
      */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -10,
        pointerEvents: 'none' 
      }}>
        
        {/* 
          Canvas Sticky:
          Otomatis mengikuti layar (seperti fixed) tapi hanya selama berada di dalam wadah absolut di atas. 
          Begitu Anda scroll naik ke Home, partikelnya akan tertinggal di bawah!
        */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'sticky',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            pointerEvents: 'none'
          }}
        />
      </div>
      
      {/* Konten Utama Website Anda (About, Skills, dll) */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
      
    </div>
  );
}
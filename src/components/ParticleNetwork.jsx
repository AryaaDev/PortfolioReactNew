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

    // ==========================================
    // REVISI 1: Simpan lebar layar saat ini
    // ==========================================
    let lastWidth = window.innerWidth;

    const handleResize = () => {
      // Cek apakah LEBAR layar benar-benar berubah (contoh: orientasi HP diputar)
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        setCanvasSize();
        init(); // Reset partikel dari awal
      } else {
        // Jika hanya TINGGI yang berubah (karena address bar browser HP sembunyi/muncul),
        // cukup update tinggi canvas saja, JANGAN jalankan init() agar partikel tidak terhapus.
        canvas.height = window.innerHeight;
      }
    };

    // Gunakan fungsi handleResize yang baru
    window.addEventListener('resize', handleResize);

    // Class Partikel (TETAP SAMA)
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

    // Fungsi init (TETAP SAMA)
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

    // Fungsi connect (TETAP SAMA)
    function connect() {
      const maxDistance = (canvas.width / 10) * (canvas.height / 10);
      ctx.lineWidth = 1; 

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) { 
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = dx * dx + dy * dy; 
          
          if (distance < maxDistance) {
            const opacityValue = 1 - (distance / maxDistance);
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

    // Fungsi animate (TETAP SAMA)
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      if (document.body.classList.contains('clean-mode')) {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        return; 
      }

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
      window.removeEventListener('resize', handleResize);
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
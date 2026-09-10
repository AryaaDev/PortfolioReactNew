import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import fotoProfil from '../assets/tes_1_11zon.webp';

export default function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
            "Software Engineer",    // 1. Pukulan pertama: Kesan profesional & engineer mindset.
            "Full Stack Developer", // 2. Skill teknis: Menunjukkan Anda menguasai keseluruhan sistem.
            "App Developer"         // 3. Output produk: Fokus pada pembuatan aplikasi nyata.
        ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home" id="home">

            {/* Background Video */}
            {/* Hapus atribut poster={posterVideo} jika kamu menghapus import di atas */}
            <video
                className="bg-video"
                autoPlay 
                muted 
                loop 
                playsInline
            >
                <source src={`${import.meta.env.BASE_URL}13.mp4`} type="video/mp4" />
            </video>

            <div className="video-overlay"></div>

            <div className="home-content">

                {/* Text Content */}
                <div className="text-content">

                    <h3>Hello, I'm</h3>

                    <h1>Muhamad Arya Darmawan</h1>

                    <h3>
                        <span ref={el}></span>
                    </h3>

                    <p>Informatics Engineering student focused on building modern web applications.</p>

                    {/* Social Media */}
                    <div className="home-sci">

                        <a
                            href="https://www.instagram.com/aryaadrmwn"
                            target="_blank"
                            rel="noreferrer"
                            style={{ '--i': 7 }}
                            aria-label="Instagram"
                        >
                            <i className="bx bxl-instagram"></i>
                        </a>

                        <a
                            href="https://wa.me/qr/FR3V5WFAFXDSK1"
                            target="_blank"
                            rel="noreferrer"
                            style={{ '--i': 8 }}
                            aria-label="WhatsApp"
                        >
                            <i className="bx bxl-whatsapp"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/muhamad-arya-darmawan"
                            target="_blank"
                            rel="noreferrer"
                            style={{ '--i': 9 }}
                            aria-label="LinkedIn"
                        >
                            <i className="bx bxl-linkedin"></i>
                        </a>

                        <a
                            href="https://www.tiktok.com/@darmawanaryaa"
                            target="_blank"
                            rel="noreferrer"
                            style={{ '--i': 10 }}
                            aria-label="TikTok"
                        >
                            <i className="bx bxl-tiktok"></i>
                        </a>

                    </div>

                    {/* CTA */}
                    <a href="#about" className="btn-box">
                        More About Me
                    </a>

                </div>

                {/* Profile */}
                <div className="profile-wrapper">
                    <div className="profile-img">
                        <img src={fotoProfil} alt="Muhamad Arya Darmawan" />
                    </div>
                </div>

            </div>
        </section>
    );
}
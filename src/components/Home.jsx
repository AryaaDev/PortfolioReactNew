import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import fotoProfil from '../assets/tes_1_11zon.webp';

export default function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
            "Software Engineer",    
            "Full Stack Developer", 
            "App Developer"         
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

            <div className="home-konten">

                {/* Text konten */}
                <div className="text-konten">

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

                {/* Profil */}
                <div className="profile-sampul">
                    <div className="profile-img">
                        <img src={fotoProfil} alt="Muhamad Arya Darmawan" />
                    </div>
                </div>

            </div>
        </section>
    );
}
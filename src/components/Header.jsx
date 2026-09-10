import { useState } from 'react';
import logoArya from '../assets/AryaDev.webp';

export default function Header() {
    // State selalu dimulai dari 'false' (Cyberpunk) setiap kali web di-refresh
    const [isCleanMode, setIsCleanMode] = useState(false);

    // Fungsi mengganti tema HANYA saat tombol diklik
    const handleThemeToggle = () => {
        const newMode = !isCleanMode;
        setIsCleanMode(newMode);

        // Langsung ubah class di body tanpa simpan ke storage
        if (newMode) {
            document.body.classList.add("clean-mode");
        } else {
            document.body.classList.remove("clean-mode");
        }
    };

    return (
        <header className="header">
            <a href="#" className="logo">
                {/* 2. Ubah pemanggilan src */}
                <img src={logoArya} alt="Logo AryaDev" />
                <span className="logo-text">AryaDev</span>
            </a>
            
            <nav className="navbar">
                <a href="#home" style={{ '--i': 1 }}>Home</a>
                <a href="#about" style={{ '--i': 2 }}>About</a>
                <a href="#skills" style={{ '--i': 3 }}>Skills</a>
                <a href="#certificates" style={{ '--i': 4 }}>Certificate</a>
                <a href="#portfolio" style={{ '--i': 5 }}>Project</a>
                <a href="#contact" style={{ '--i': 6 }}>Contact</a>
                
                {/* Tombol Toggle */}
                <button 
                    onClick={handleThemeToggle}
                    className="theme-toggle-btn" 
                    style={{ '--i': 7 }}
                    aria-label="Toggle Clean Mode"
                >
                    <div className="toggle-thumb">
                        <i className={isCleanMode ? "bx bx-sun" : "bx bx-moon"}></i>
                    </div>
                </button>
            </nav>
        </header>
    );
}
import { useState } from 'react';

export default function Header() {
    const [isProfessionalMode, setIsProfessionalMode] = useState(false);

    const handleThemeToggle = () => {
        const newMode = !isProfessionalMode;

        setIsProfessionalMode(newMode);

        if (newMode) {
            document.body.classList.add('clean-mode');
        } else {
            document.body.classList.remove('clean-mode');
        }
    };

    return (
        <header className="header">
            {/* Bagian logo sekarang hanya menyisakan teks AryaDev */}
            <a href="#" className="logo">
                <span className="logo-text">AryaDev</span>
            </a>

            <nav className="navbar">
                <a href="#home" style={{ '--i': 1 }}>Home</a>
                <a href="#about" style={{ '--i': 2 }}>About</a>
                <a href="#skills" style={{ '--i': 3 }}>Skills</a>
                <a href="#certificates" style={{ '--i': 4 }}>Certificate</a>
                <a href="#portfolio" style={{ '--i': 5 }}>Project</a>
                <a href="#contact" style={{ '--i': 6 }}>Contact</a>

                <button
                    onClick={handleThemeToggle}
                    className="theme-toggle-btn"
                    style={{ '--i': 7 }}
                    aria-label={
                        isProfessionalMode
                            ? 'Switch to Tech Mode'
                            : 'Switch to Professional Mode'
                    }
                    title={
                        isProfessionalMode
                            ? 'Switch to Tech Mode'
                            : 'Switch to Professional Mode'
                    }
                >
                    <div className="toggle-thumb">
                        <i
                            className={
                                isProfessionalMode
                                    ? 'bx bx-briefcase'
                                    : 'bx bx-code-alt'
                            }
                        ></i>
                    </div>
                </button>
            </nav>
        </header>
    );
}

export default function Header() {
    return (
        <header className="header">
            {/* Logo AryaDev */}
            <a href="#home" className="logo" aria-label="AryaDev Home">
                <span className="logo-text">AryaDev</span>
            </a>

            {/* Menu Navigasi */}
            <nav className="navbar" aria-label="Navigasi utama">
                <a href="#home" style={{ "--i": 1 }}>Home</a>
                <a href="#about" style={{ "--i": 2 }}>About</a>
                <a href="#skills" style={{ "--i": 3 }}>Skills</a>
                <a href="#certificates" style={{ "--i": 4 }}>Certificate</a>
                <a href="#portfolio" style={{ "--i": 5 }}>Project</a>
                <a href="#contact" style={{ "--i": 6 }}>Contact</a>
            </nav>
        </header>
    );
}

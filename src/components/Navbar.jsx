
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header
            className={`navbar${scrolled ? " scrolled" : ""}`}
            id="navbar"
        >
            <div className="nav-container">
                <a href="/#home" className="brand" onClick={closeMenu}>
                    <img
                        src="/images/logo.png"
                        alt="Ayam Penyet Sambel Dower"
                        className="brand-logo"
                    />
                </a>

                <nav className="desktop-nav">
                    <Link to="/" onClick={closeMenu}>Beranda</Link>
                    <Link to="/tentang-kami" onClick={closeMenu}>
                        Tentang Kami
                    </Link>
                    <a href="/#menu">Menu Unggulan</a>
                    <a href="/#contact">Kontak Kami</a>
                    <a href="/#reservation" className="nav-button">
                        Pesan Sekarang
                    </a>
                </nav>

                <button
                    className={`hamburger${menuOpen ? " active" : ""}`}
                    type="button"
                    aria-label="Buka menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(v => !v)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav className={`mobile-nav${menuOpen ? " active" : ""}`}>
                <Link to="/" onClick={closeMenu}>Beranda</Link>
                <Link to="/tentang-kami" onClick={closeMenu}>
                    Tentang Kami
                </Link>
                <a href="/#menu" onClick={closeMenu}>Menu Unggulan</a>
                <a href="/#contact" onClick={closeMenu}>Kontak Kami</a>
                <a
                    href="/#reservation"
                    className="mobile-nav-button"
                    onClick={closeMenu}
                >
                    Pesan Sekarang
                </a>
            </nav>
        </header>
    );
}

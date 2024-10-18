import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        setScrolling(window.scrollY > 50);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrolling ? 'scrolled' : ''} ${location.pathname === '/' ? 'home' : location.pathname.slice(1)}`}>
            <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
                <div className={`nav-links ${isMenuOpen ? 'menu-open' : ''}`}>
                    <span className="close-menu" onClick={closeMenu}>X</span>
                    <Link className="home" to="/" onClick={closeMenu}>Home</Link>
                    <Link className="about" to="/about" onClick={closeMenu}>About</Link>
                    <Link className="team" to="/team" onClick={closeMenu}>Team</Link>
                    <Link className="contact" to="/contact" onClick={closeMenu}>Contact</Link>
                </div>

                <Link className="logo" to="/">Prosperium</Link>

                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;

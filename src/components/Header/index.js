import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import homeImage from '../../../src/teste1.jpg'; 
import aboutImage from '../../../src/teste2.jpg'; 

function Header() {
    const [scrolling, setScrolling] = useState(false);
    const location = useLocation();
    const [backgroundImage, setBackgroundImage] = useState(homeImage);
    const [isImageLoaded, setIsImageLoaded] = useState(true); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const preloadImage = (src) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
        });
    };

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

    useEffect(() => {
        let newImage;
        switch (location.pathname) {
            case '/':
                newImage = homeImage;
                break;
            case '/about':
                newImage = aboutImage;
                break;
            case '/team':
                newImage = aboutImage;
                break;
            case '/contact':
                newImage = homeImage;
                break;
            default:
                newImage = homeImage; 
        }

        setIsImageLoaded(false); 
        preloadImage(newImage).then(() => {
            setBackgroundImage(newImage); 
            setIsImageLoaded(true); 
        });
    }, [location.pathname]);

    return (
        <header className={`header ${scrolling ? 'scrolled' : ''} ${isImageLoaded ? 'image-loaded' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
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

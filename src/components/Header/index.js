import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import brasil from '../../img/brasil.png';
import eua from '../../img/estados-unidos.png';
import icone2 from '../../img/icone2.png';
import vertical1 from '../../img/horizontal-3.png';


function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [logo, setLogo] = useState(icone2); 
    const location = useLocation();
    const { t, i18n } = useTranslation('header');

    const toggleLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsDropdownOpen(false); 
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
       
        const updateLogo = () => {
            setLogo(window.innerWidth > 768 ? vertical1 : icone2);
        };

        updateLogo(); 

        const mediaQuery = window.matchMedia('(min-width: 769px)');
        mediaQuery.addEventListener('change', updateLogo); 

        return () => mediaQuery.removeEventListener('change', updateLogo);
    }, []);

    return (
        <>
             <header
            className={`header ${scrolling ? "scrolled" : ""} ${
                location.pathname === "/" ? "home" : location.pathname.slice(1)
            }`}
        >
            {location.pathname === "/" && (
                <video autoPlay loop muted playsInline className="header-video">
                    <source src="../../img/homepage.mp4" type="video/mp4" />
                   
                </video>
            )}
                <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
                    
                    <div className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img
                            src={i18n.language === 'en' ? eua : brasil}
                            alt="language"
                            className="flag-icon"
                        />
                        <span>{i18n.language === 'en' ? 'EN' : 'PTBR'}</span>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <div className="dropdown-item" onClick={() => toggleLanguage('en')}>
                                    <img src={eua} alt="English" className="flag-icon" /> English
                                </div>
                                <div className="dropdown-item" onClick={() => toggleLanguage('pt')}>
                                    <img src={brasil} alt="Português" className="flag-icon" /> Português
                                </div>
                            </div>
                        )}
                    </div>

                    <Link className="logo" to="/">
                        <img src={logo} alt="Logo" className="logo-icon" />
                    </Link>

                    <div className={`nav-links ${isMenuOpen ? 'menu-open' : ''}`}>
                        <span className="close-menu" onClick={closeMenu}>X</span>
                        <div>
                            <Link className={`home ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={closeMenu}>
                                {t('home')}
                            </Link>
                            <Link className={`about ${location.pathname === '/about' ? 'active' : ''}`} to="/about" onClick={closeMenu}>
                                {t('about')}
                            </Link>
                            <Link className={`team ${location.pathname === '/team' ? 'active' : ''}`} to="/team" onClick={closeMenu}>
                                {t('team')}
                            </Link>
                            <Link className={`contact ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" onClick={closeMenu}>
                                {t('contact')}
                            </Link>
                        </div>
                    </div>

                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;

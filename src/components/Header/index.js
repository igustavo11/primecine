import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import brasil from '../../img/brasil.png';
import eua from '../../img/estados-unidos.png';

function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

    
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

    return (
        <>
            <header className={`header ${scrolling ? 'scrolled' : ''} ${location.pathname === '/' ? 'home' : location.pathname.slice(1)}`}>
                <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
                    <Link className="logo" to="/">Prosperium</Link>

                    
                    <div className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img
                            src={i18n.language === 'en' ? eua : brasil}
                            alt="language"
                            className="flag-icon"
                        />
                        <span>{i18n.language === 'en' ? 'English' : 'Português'}</span>
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

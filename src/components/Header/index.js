
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


import homeImage from '../../../src/teste1.jpg'; 
import aboutImage from '../../../src/teste2.jpg'; 


function Header() {
    const [scrolling, setScrolling] = useState(false);
    const location = useLocation(); 
    const [backgroundImage, setBackgroundImage] = useState('');

    const handleScroll = () => {
        setScrolling(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setBackgroundImage(`url(${homeImage})`);
                break;
            case '/about':
                setBackgroundImage(`url(${aboutImage})`);
                break;
            case '/team':
                setBackgroundImage(`url(${aboutImage})`);
                break;
            case '/contact':
                setBackgroundImage(`url(${homeImage})`);
                break;
            default:
                setBackgroundImage(''); 
        }
    }, [location.pathname]);

    return (
        <header className={`header ${scrolling ? 'scrolled' : ''}`} style={{ backgroundImage }}>
            <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
                
                <div className="nav-links">
                    <Link className="home" to="/">Home</Link>
                    <Link className="about" to="/about">About</Link>
                    <Link className="team" to="/team">Team</Link>
                    <Link className="contact" to="/contact">Contact</Link>
                </div>
                <Link className="logo" to="/">Prosperium</Link>
            </nav>
        </header>
    );
}

export default Header;

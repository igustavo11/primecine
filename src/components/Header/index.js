// Header.js
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="nav-links">
                <Link className="home" to="/">Home</Link>
                <Link className="about" to="/About">About</Link>
                <Link className="team" to="/Team">Team</Link>
                <Link className="contact" to="/Contact">Contact</Link>
            </div>
            <Link className="logo" to="/">Prosperium</Link>
        </header>
    );
}

export default Header;

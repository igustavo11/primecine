import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import brasil from "../../img/brasil.png";
import eua from "../../img/estados-unidos.png";
import icone2 from "../../img/icon.png";
import vertical1 from "../../img/logoP.png";
import {
  Home,
  Folder,
  Contact,
  Info,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [logo, setLogo] = useState(icone2);
  const location = useLocation();
  const { t, i18n } = useTranslation("header");

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
    if (isMenuOpen) setIsMenuOpen(false);
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateLogo = () => {
      setLogo(window.innerWidth > 768 ? vertical1 : icone2);
    };

    updateLogo();
    const mediaQuery = window.matchMedia("(min-width: 769px)");
    mediaQuery.addEventListener("change", updateLogo);

    return () => mediaQuery.removeEventListener("change", updateLogo);
  }, []);

  const menuItems = [
    { path: "/", icon: <Home size={18} />, label: t("home") },
    { path: "/about", icon: <Info size={18} />, label: t("about") },
    { path: "/portifolio", icon: <Folder size={18} />, label: t("portifolio") },
    { path: "/contact", icon: <Contact size={18} />, label: t("contact") },
  ];

  return (
    <header
      className={`header ${scrolling ? "scrolled" : ""} ${
        location.pathname === "/" ? "home" : location.pathname.slice(1)
      }`}
    >
      <div className={`navbar-container ${scrolling ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <Link className="logo" to="/">
            <img src={logo} alt="Logo" className="logo-icon" />
          </Link>

          <nav className="desktop-menu">
            <ul className="menu-items">
              {menuItems.map((item) => (
                <li key={item.path} className="menu-item">
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? "active" : ""}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar-actions">
            <div
              className="language-selector"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={i18n.language === "en" ? eua : brasil}
                alt={i18n.language === "en" ? "English" : "Português"}
                className="flag-icon"
              />
              <span>{i18n.language === "en" ? "EN" : "PT"}</span>
              <ChevronDown size={14} />

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="language-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`language-option ${
                        i18n.language === "en" ? "active" : ""
                      }`}
                      onClick={() => toggleLanguage("en")}
                    >
                      <img src={eua} alt="English" className="flag-icon" />
                      <span>English</span>
                    </div>
                    <div
                      className={`language-option ${
                        i18n.language === "pt" ? "active" : ""
                      }`}
                      onClick={() => toggleLanguage("pt")}
                    >
                      <img src={brasil} alt="Português" className="flag-icon" />
                      <span>Português</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="mobile-menu-close"
              onClick={closeMenu}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
            <div className="mobile-menu-content">
              <ul className="mobile-menu-items">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mobile-menu-item"
                  >
                    <Link
                      to={item.path}
                      className={
                        location.pathname === item.path ? "active" : ""
                      }
                      onClick={closeMenu}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-language-options">
                <p className="mobile-language-title">{t("language")}</p>
                <div className="mobile-language-buttons">
                  <button
                    className={`mobile-language-button ${
                      i18n.language === "pt" ? "active" : ""
                    }`}
                    onClick={() => toggleLanguage("pt")}
                  >
                    <img src={brasil} alt="Português" className="flag-icon" />
                    <span>PT</span>
                  </button>
                  <button
                    className={`mobile-language-button ${
                      i18n.language === "en" ? "active" : ""
                    }`}
                    onClick={() => toggleLanguage("en")}
                  >
                    <img src={eua} alt="English" className="flag-icon" />
                    <span>EN</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

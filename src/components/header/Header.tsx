import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav container">
        {/* Logo */}
        <a href="index.html" className="nav__logo">Yuvaraj</a>

        {/* Navigation Menu */}
        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link" onClick={closeMenu}>Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link" onClick={closeMenu}>About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link" onClick={closeMenu}>Skills</a></li>
            <li className="nav__item"><a href="#projects" className="nav__link" onClick={closeMenu}>Projects</a></li>
          </ul>

          {/* Close Icon */}
          {menuOpen && (
            <i className="uil uil-times nav__close" onClick={closeMenu}></i>
          )}
        </div>

        {/* Toggle Icon (hamburger) — hidden when menu is open */}
        {!menuOpen && (
          <div className="toggle" onClick={toggleMenu}>
            <i className="uil uil-apps"></i>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

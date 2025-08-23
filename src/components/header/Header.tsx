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
        <a href="#home" className="nav__logo">Yuvaraj</a>

        {/* Navigation Menu */}
        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={closeMenu}>Skills</a>
            </li>
            
          </ul>

          {/* Close Icon */}
          {menuOpen && (
            <i className="uil uil-times nav__close" onClick={closeMenu}></i>
          )}
        </div>

        {/* Hamburger Icon (only mobile) */}
        {!menuOpen && (
          <div className="toggle" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

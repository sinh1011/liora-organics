import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import logoImg from '../assets/liora-logo.jpg';

export default function Header() {
  const { t, toggleLang } = useLanguage();
  const { toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#top" aria-label="Liora Organics">
          <img src={logoImg} alt="Liora Organics logo" />
          <span>Liora Organics</span>
        </a>

        <nav
          className={`menu ${isMenuOpen ? 'open' : ''}`}
          id="menu"
          aria-label="Main navigation"
        >
          <a href="#products" onClick={closeMenu}>
            {t('nav.products')}
          </a>
          <a href="#trust" onClick={closeMenu}>
            {t('nav.trust')}
          </a>
          <a href="#factory" onClick={closeMenu}>
            {t('nav.factory')}
          </a>
          <a href="#reviews" onClick={closeMenu}>
            {t('nav.reviews')}
          </a>
          <a href="#blog" onClick={closeMenu}>
            {t('nav.blog')}
          </a>
          <a href="#contact" onClick={closeMenu}>
            {t('nav.contact')}
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            id="themeToggle"
            aria-label="Đổi giao diện"
            onClick={toggleTheme}
          >
            🌗
          </button>
          <button
            className="lang-btn"
            id="langToggle"
            onClick={toggleLang}
          >
            VI / EN
          </button>
          <button
            className="hamb"
            id="menuBtn"
            aria-label="Mở menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

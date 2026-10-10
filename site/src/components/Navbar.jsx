import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../data/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { t, toggleLang } = useLang();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/play', label: t.nav.play },
    { to: '/courses', label: t.nav.courses },
    { to: '/teachers', label: t.nav.teachers },
    { to: '/about', label: t.nav.about },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label={t.lang === 'ar' ? 'التنقّل الرئيسي' : 'Navigation principale'}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand" aria-label={t.siteName}>
          <span className="navbar-logo" aria-hidden="true">
            <svg viewBox="0 0 44 52" width="36" height="42">
              <path d="M3 50V22a19 19 0 0 1 38 0v28z" fill="var(--blue-deep)" />
              <path d="M8 50V23a14 14 0 0 1 28 0v27z" fill="var(--blue-primary)" />
              <path d="M22 25.5l2.2 4.6 5 .6-3.7 3.4 1 5-4.5-2.5-4.5 2.5 1-5-3.7-3.4 5-.6z" fill="var(--yellow-sun)" />
            </svg>
          </span>
          <span className="navbar-title">{t.siteName}</span>
        </Link>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="navbar-lang-btn"
            onClick={toggleLang}
            aria-label={t.switchLabel}
          >
            {t.langLabel}
          </button>
        </div>
      </div>
    </nav>
  );
}

import { Link } from 'react-router-dom';
import { useLang } from '../data/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg viewBox="0 0 44 52" width="32" height="38">
              <path d="M3 50V22a19 19 0 0 1 38 0v28z" fill="var(--blue-pale)" />
              <path d="M8 50V23a14 14 0 0 1 28 0v27z" fill="var(--blue-light)" />
              <path d="M22 25.5l2.2 4.6 5 .6-3.7 3.4 1 5-4.5-2.5-4.5 2.5 1-5-3.7-3.4 5-.6z" fill="var(--yellow-sun)" />
            </svg>
            <span>{t.siteName}</span>
          </div>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>

        <div className="footer-col">
          <h3>{t.footer.nav}</h3>
          <Link to="/">{t.nav.home}</Link>
          <Link to="/play">{t.nav.play}</Link>
          <Link to="/courses">{t.nav.courses}</Link>
        </div>

        <div className="footer-col">
          <h3>{t.footer.resources}</h3>
          <Link to="/teachers">{t.nav.teachers}</Link>
          <Link to="/about">{t.nav.about}</Link>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

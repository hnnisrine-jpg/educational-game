import { Link } from 'react-router-dom';
import { useLang } from '../data/LanguageContext';
import './Home.css';

export default function Home() {
  const { t } = useLang();

  const cards = [
    {
      icon: '🎮',
      title: t.home.cardGame,
      desc: t.home.cardGameDesc,
      link: '/play',
      color: 'blue',
    },
    {
      icon: '📚',
      title: t.home.cardCourses,
      desc: t.home.cardCoursesDesc,
      link: '/courses',
      color: 'pink',
    },
    {
      icon: '👩‍🏫',
      title: t.home.cardTeachers,
      desc: t.home.cardTeachersDesc,
      link: '/teachers',
      color: 'yellow',
    },
    {
      icon: '🌿',
      title: t.home.cardEnvironment,
      desc: t.home.cardEnvironmentDesc,
      link: '/courses',
      color: 'green',
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-arch"></div>
          <div className="hero-buildings">
            <div className="building b1"></div>
            <div className="building b2"></div>
            <div className="building b3"></div>
            <div className="building b4"></div>
            <div className="building b5"></div>
          </div>
          <div className="hero-sun"></div>
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">{t.home.heroTitle}</h1>
          <p className="hero-subtitle">{t.home.heroSubtitle}</p>
          <div className="hero-actions">
            <Link to="/play" className="btn btn-primary btn-lg">
              {t.home.btnPlay}
            </Link>
            <Link to="/teachers" className="btn btn-secondary btn-lg">
              {t.home.btnTeachers}
            </Link>
          </div>
        </div>
        <div className="hero-illustration" aria-hidden="true">
          {/* Placeholder for game illustration / screenshot */}
          <div className="hero-game-preview">
            <div className="game-preview-placeholder">
              <svg viewBox="0 0 44 52" width="80" height="96">
                <path d="M3 50V22a19 19 0 0 1 38 0v28z" fill="var(--blue-deep)" />
                <path d="M8 50V23a14 14 0 0 1 28 0v27z" fill="var(--blue-primary)" />
                <path d="M22 25.5l2.2 4.6 5 .6-3.7 3.4 1 5-4.5-2.5-4.5 2.5 1-5-3.7-3.4 5-.6z" fill="var(--yellow-sun)" />
              </svg>
              <p>{t.siteName}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="explore container">
        <h2 className="section-title">{t.home.exploreTitle}</h2>
        <p className="explore-desc">{t.home.exploreDesc}</p>

        <div className="cards-grid">
          {cards.map(card => (
            <Link to={card.link} key={card.title} className={`card activity-card card-${card.color}`}>
              <span className="card-icon" aria-hidden="true">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

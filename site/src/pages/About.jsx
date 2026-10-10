import { useLang } from '../data/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLang();

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>{t.about.title}</h1>
        </div>
      </section>

      <div className="container about-content">
        <section className="about-intro card">
          <p className="about-desc">{t.about.description}</p>
        </section>

        <div className="about-grid">
          <section className="card about-section">
            <h2>{t.about.mission}</h2>
            <p>{t.about.missionText}</p>
          </section>

          <section className="card about-section">
            <h2>{t.about.approach}</h2>
            <p>{t.about.approachText}</p>
          </section>
        </div>

        <section className="card about-values">
          <h2>{t.about.values}</h2>
          <ul className="values-list">
            {t.about.valuesList.map((value, i) => (
              <li key={i}>
                <span className="value-icon" aria-hidden="true">
                  {['🏛️', '🤝', '🌱', '🎮'][i]}
                </span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card about-author">
          <h2>{t.about.authorLabel}</h2>
          <p className="author-placeholder">{t.about.authorPlaceholder}</p>
        </section>

        <section className="card about-contact">
          <h2>{t.about.contactTitle}</h2>
          <p>{t.about.contactText}</p>
          <a href={`mailto:${t.about.contactEmail}`} className="btn btn-primary">
            {t.about.contactEmail}
          </a>
        </section>
      </div>
    </div>
  );
}

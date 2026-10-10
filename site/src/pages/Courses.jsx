import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLang } from '../data/LanguageContext';
import activities from '../data/activities';
import './Courses.css';

export default function Courses() {
  const { t, lang } = useLang();
  const { grade: gradeParam } = useParams();
  const [selectedGrade, setSelectedGrade] = useState(
    gradeParam === '6' ? 6 : gradeParam === '5' ? 5 : null
  );

  const themeKeys = Object.keys(t.courses.themes);

  const filteredActivities = selectedGrade
    ? activities.filter(a => a.grade === selectedGrade)
    : activities;

  const groupedByTheme = themeKeys.reduce((acc, theme) => {
    const items = filteredActivities.filter(a => a.theme === theme);
    if (items.length > 0) acc[theme] = items;
    return acc;
  }, {});

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="container">
          <h1>{t.courses.title}</h1>
          <p>{t.courses.subtitle}</p>
        </div>
      </section>

      <div className="container courses-content">
        <div className="grade-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={selectedGrade === null}
            className={`grade-tab ${selectedGrade === null ? 'active' : ''}`}
            onClick={() => setSelectedGrade(null)}
          >
            {lang === 'ar' ? 'الكلّ' : 'Tout'}
          </button>
          <button
            role="tab"
            aria-selected={selectedGrade === 5}
            className={`grade-tab ${selectedGrade === 5 ? 'active' : ''}`}
            onClick={() => setSelectedGrade(5)}
          >
            {t.courses.grade5}
          </button>
          <button
            role="tab"
            aria-selected={selectedGrade === 6}
            className={`grade-tab ${selectedGrade === 6 ? 'active' : ''}`}
            onClick={() => setSelectedGrade(6)}
          >
            {t.courses.grade6}
          </button>
        </div>

        {Object.entries(groupedByTheme).map(([theme, items]) => (
          <section key={theme} className="theme-section">
            <h2 className="theme-title">
              <span className={`theme-dot theme-${theme}`}></span>
              {t.courses.themes[theme]}
            </h2>
            <div className="activities-grid">
              {items.map(activity => (
                <article key={activity.id} className="card activity-detail-card">
                  <div className="activity-header">
                    <h3>{activity.title[lang]}</h3>
                    <div className="activity-badges">
                      <span className="badge badge-blue">
                        {activity.grade === 5 ? t.courses.grade5 : t.courses.grade6}
                      </span>
                      <span className="badge badge-yellow">{activity.duration}</span>
                    </div>
                  </div>

                  <div className="activity-body">
                    <div className="activity-field">
                      <strong>{t.courses.objective}</strong>
                      <p>{activity.objective[lang]}</p>
                    </div>
                    <div className="activity-field">
                      <strong>{t.courses.instructions}</strong>
                      <p>{activity.instructions[lang]}</p>
                    </div>
                  </div>

                  {activity.resources.length > 0 ? (
                    <div className="activity-resources">
                      <strong>{t.courses.resources}</strong>
                      <ul>
                        {activity.resources.map((r, i) => (
                          <li key={i}>
                            {r.url ? (
                              <a href={r.url} target="_blank" rel="noopener noreferrer">
                                {r.label[lang]}
                              </a>
                            ) : (
                              <span className="resource-pending">{r.label[lang]} — {t.courses.resourcePending}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="placeholder-resource">
                      {t.courses.comingSoon}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}

        <div className="courses-cta">
          <Link to="/play" className="btn btn-primary btn-lg">
            {t.home.btnPlay}
          </Link>
        </div>
      </div>
    </div>
  );
}

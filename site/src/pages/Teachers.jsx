import { useState } from 'react';
import { useLang } from '../data/LanguageContext';
import teacherResources from '../data/teacherResources';
import './Teachers.css';

export default function Teachers() {
  const { t, lang } = useLang();
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterTheme, setFilterTheme] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const themeKeys = Object.keys(t.courses.themes);
  const typeKeys = Object.keys(t.teachers.types);

  const filtered = teacherResources.filter(r => {
    if (filterLevel !== 'all' && r.grade !== Number(filterLevel)) return false;
    if (filterTheme !== 'all' && r.theme !== filterTheme) return false;
    if (filterType !== 'all' && r.type !== filterType) return false;
    return true;
  });

  return (
    <div className="teachers-page">
      <section className="teachers-hero">
        <div className="container">
          <h1>{t.teachers.title}</h1>
          <p>{t.teachers.subtitle}</p>
        </div>
      </section>

      <div className="container teachers-content">
        <div className="filters-bar">
          <div className="filter-group">
            <label htmlFor="filter-level">{t.teachers.filterLevel}</label>
            <select
              id="filter-level"
              value={filterLevel}
              onChange={e => setFilterLevel(e.target.value)}
            >
              <option value="all">{t.teachers.allLevels}</option>
              <option value="5">{t.courses.grade5Full}</option>
              <option value="6">{t.courses.grade6Full}</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filter-theme">{t.teachers.filterTheme}</label>
            <select
              id="filter-theme"
              value={filterTheme}
              onChange={e => setFilterTheme(e.target.value)}
            >
              <option value="all">{t.teachers.allThemes}</option>
              {themeKeys.map(k => (
                <option key={k} value={k}>{t.courses.themes[k]}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filter-type">{t.teachers.filterType}</label>
            <select
              id="filter-type"
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
            >
              <option value="all">{t.teachers.allTypes}</option>
              {typeKeys.map(k => (
                <option key={k} value={k}>{t.teachers.types[k]}</option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="no-results">
            <p>{t.teachers.noResults}</p>
          </div>
        ) : (
          <div className="resources-grid">
            {filtered.map(resource => (
              <article key={resource.id} className="card resource-card">
                <div className="resource-header">
                  <span className={`resource-type-badge badge badge-${resource.type === 'lesson' ? 'blue' : resource.type === 'activity' ? 'green' : resource.type === 'evaluation' ? 'yellow' : 'pink'}`}>
                    {t.teachers.types[resource.type]}
                  </span>
                  <span className="badge badge-blue">
                    {resource.grade === 5 ? t.courses.grade5 : t.courses.grade6}
                  </span>
                </div>

                <h3>{resource.title[lang]}</h3>
                <p className="resource-desc">{resource.description[lang]}</p>

                {resource.officialRef && (
                  <div className="official-ref">
                    <strong>{t.teachers.officialRef}</strong>
                    <p>
                      {resource.officialRef.document}
                      {resource.officialRef.date && (
                        <> — {t.teachers.date}: {resource.officialRef.date}</>
                      )}
                      {resource.officialRef.pages && (
                        <> — {t.teachers.pages}: {resource.officialRef.pages}</>
                      )}
                    </p>
                  </div>
                )}

                {!resource.isOfficial && (
                  <p className="independent-notice">{t.teachers.independentPrep}</p>
                )}

                {resource.fileUrl ? (
                  <a
                    href={resource.fileUrl}
                    className="btn btn-primary"
                    download
                  >
                    {t.teachers.download}
                  </a>
                ) : (
                  <div className="placeholder-resource">
                    {t.courses.resourcePending}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

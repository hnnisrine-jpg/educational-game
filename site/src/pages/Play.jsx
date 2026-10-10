import { useRef, useState } from 'react';
import { useLang } from '../data/LanguageContext';
import './Play.css';

export default function Play() {
  const { t } = useLang();
  const iframeRef = useRef(null);
  const [showGame, setShowGame] = useState(false);

  const handleFullscreen = () => {
    const el = iframeRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  };

  return (
    <div className="play-page">
      <section className="play-hero">
        <div className="container">
          <h1>{t.play.title}</h1>
          <p className="play-subtitle">{t.play.subtitle}</p>
        </div>
      </section>

      <div className="container play-content">
        <div className="play-main">
          <div className="game-container">
            {showGame ? (
              <iframe
                ref={iframeRef}
                src="/game/index.html"
                title={t.play.title}
                className="game-iframe"
                allow="fullscreen"
              />
            ) : (
              <div className="game-placeholder">
                <div className="game-placeholder-inner">
                  <svg viewBox="0 0 44 52" width="64" height="76">
                    <path d="M3 50V22a19 19 0 0 1 38 0v28z" fill="var(--blue-deep)" />
                    <path d="M8 50V23a14 14 0 0 1 28 0v27z" fill="var(--blue-primary)" />
                    <path d="M22 25.5l2.2 4.6 5 .6-3.7 3.4 1 5-4.5-2.5-4.5 2.5 1-5-3.7-3.4 5-.6z" fill="var(--yellow-sun)" />
                  </svg>
                  <h2>{t.siteName}</h2>
                  <p>{t.play.description}</p>
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => setShowGame(true)}
                  >
                    {t.play.btnLaunch}
                  </button>
                </div>
              </div>
            )}
            {showGame && (
              <div className="game-controls">
                <button className="btn btn-outline" onClick={handleFullscreen}>
                  {t.play.btnFullscreen}
                </button>
              </div>
            )}
          </div>

          <div className="play-info card">
            <h3>{t.play.instructions}</h3>
            <p>{t.play.instructionsText}</p>
          </div>
        </div>

        <aside className="play-sidebar">
          <div className="card play-meta">
            <dl>
              <div className="meta-item">
                <dt>{t.play.level}</dt>
                <dd>{t.play.levelValue}</dd>
              </div>
              <div className="meta-item">
                <dt>{t.play.duration}</dt>
                <dd>{t.play.durationValue}</dd>
              </div>
            </dl>
          </div>

          <div className="card play-objectives">
            <h3>{t.play.objectives}</h3>
            <ul>
              {t.play.objectivesList.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

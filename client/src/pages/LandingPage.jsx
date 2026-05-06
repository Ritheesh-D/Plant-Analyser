import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { UploadCloud, Cpu, Sparkles, Globe, User } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import '../styles/LandingPage.css';

function LandingPage() {
  const { user, logout } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleScanClick = () => {
    if (user) {
      navigate('/scan');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="landing-container">
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Top Navbar */}
      <nav className="glass-nav">
        <div className="navbar-logo">
          <img
            src="/favicon.svg"
            alt="logo"
            width="36"
            height="36"
            style={{ borderRadius: '8px', marginRight: '10px' }}
          />
          <span style={{
            color: '#00ff99',
            fontWeight: 800,
            fontSize: '20px',
            letterSpacing: '1px'
          }}>
            {t('appName')}
          </span>
        </div>

        <div className="nav-actions">
          {/* Language Toggle */}
          <button className="lang-toggle glow-hover" onClick={toggleLanguage}>
            <Globe size={18} />
            <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          {/* Auth Buttons */}
          {user ? (
            <div className="user-menu">
              <span className="user-email">
                <User size={16} /> {user.email}
              </span>
              <button
                className="btn-outline glow-hover"
                onClick={logout}
              >
                {t('logout')}
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <button
                className="btn-outline glow-hover"
                onClick={() => navigate('/login')}
              >
                {t('loginBtn')}
              </button>
              <button
                className="btn-primary"
                onClick={() => navigate('/signup')}
              >
                {t('signupTitle')}
              </button>
            </div>
          )}
        </div>
      </nav>

      <main className="landing-content">

        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-heading glow-text">
            {t('heroTitle')}
          </h1>
          <p className="hero-subheading">
            {t('heroSubtitle')}
          </p>

          {/* Search Bar */}
          <div className="search-bar-wrapper">
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="search-bar"
            />
          </div>

          {/* Scanner */}
          <div className="scanner-wrapper">
            <div className="scanner-ring"></div>
            <div className="scanner-ring"></div>
            <div className="scanner-ring"></div>
            <div className="scanner-btn" onClick={handleScanClick}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00ff99"
                strokeWidth="2"
              >
                <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span style={{
                color: '#00ff99',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '2px',
                marginTop: '8px'
              }}>
                {t('scanNow')}
              </span>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bottom-sections">
          <h2 className="section-title">
            {t('howItWorks')}
          </h2>

          <div className="steps-container">
            <div className="step-card glass-panel">
              <UploadCloud className="step-icon" size={40} />
              <h3>{t('step1')}</h3>
              <p className="text-secondary">{t('step1Desc')}</p>
            </div>

            <div className="step-card glass-panel">
              <Cpu className="step-icon" size={40} />
              <h3>{t('step2')}</h3>
              <p className="text-secondary">{t('step2Desc')}</p>
            </div>

            <div className="step-card glass-panel">
              <Sparkles className="step-icon" size={40} />
              <h3>{t('step3')}</h3>
              <p className="text-secondary">{t('step3Desc')}</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default LandingPage;
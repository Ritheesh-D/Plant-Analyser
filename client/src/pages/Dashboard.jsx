import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Leaf, HeartPulse, Activity, MapPin, Beaker, Globe, User, LogOut, ScanLine } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import ParticlesBackground from '../components/ParticlesBackground';
import '../styles/Dashboard.css';

const getName = (plant) => 
  plant?.commonName || plant?.name || plant?.plantName || 'Unknown Plant';

const getUses = (plant) => {
  const uses = plant?.herbalUses || plant?.uses || plant?.herbaluse || '';
  if (Array.isArray(uses)) return uses[0] || '...';
  if (typeof uses === 'string') return uses.split(',')[0] || uses || '...';
  return '...';
};

const getMedical = (plant) => {
  const med = plant?.medicalUses || plant?.medical || plant?.medicinalUses || '';
  if (Array.isArray(med)) return med[0] || '...';
  if (typeof med === 'string') return med.split(',')[0] || med || '...';
  return '...';
};

const getCures = (plant) => {
  const cures = plant?.diseasesItCures || plant?.diseases || plant?.cures || plant?.treats || '';
  if (Array.isArray(cures)) return cures[0] || '...';
  if (typeof cures === 'string') return cures.split(',')[0] || cures || '...';
  return '...';
};

function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();

  const tamilNames = {
    'Tulsi': 'துளசி', 'Neem': 'வேம்பு', 'Aloe Vera': 'கற்றாழை',
    'Ashwagandha': 'அஸ்வகந்தா', 'Ginger': 'இஞ்சி', 'Turmeric': 'மஞ்சள்',
    'Moringa': 'முருங்கை', 'Brahmi': 'பிரம்மி', 'Amla': 'நெல்லிக்காய்',
    'Peppermint': 'புதினா', 'Lavender': 'லாவெண்டர்', 'Chamomile': 'காமோமில்',
    'Ginseng': 'ஜின்சென்', 'Fenugreek': 'வெந்தயம்', 'Cinnamon': 'இலவங்கப்பட்டை',
    'Garlic': 'பூண்டு', 'Rosemary': 'ரோஸ்மேரி', 'Hibiscus': 'செம்பருத்தி',
    'Jasmine': 'மல்லிகை', 'Rose': 'ரோஜா', 'Marigold': 'சாமந்தி',
    'Lotus': 'தாமரை', 'Banana': 'வாழை', 'Coconut': 'தேங்காய்',
    'Mango': 'மாமரம்', 'Papaya': 'பப்பாளி', 'Guava': 'கொய்யா',
    'Lemon': 'எலுமிச்சை', 'Pepper': 'மிளகு', 'Cardamom': 'ஏலக்காய்',
    'Clove': 'கிராம்பு', 'Fennel': 'பெருஞ்சீரகம்', 'Coriander': 'கொத்தமல்லி',
    'Mint': 'புதினா', 'Curry Leaf': 'கறிவேப்பிலை', 'Saffron': 'குங்குமப்பூ',
    'Pomegranate': 'மாதுளை', 'Bitter Gourd': 'பாகற்காய்', 'Giloy': 'கிலோய்',
    'Shatavari': 'சதாவரி', 'Haritaki': 'கடுக்காய்', 'Ashoka': 'அசோகா',
    'Shankhpushpi': 'சங்கபுஷ்பி', 'Bhringraj': 'பிருங்கராஜ்', 'Arjuna': 'அர்ஜுன்',
    'Noni': 'நோனி', 'Lemongrass': 'எலுமிச்சை புல்', 'Galangal': 'கலங்கல்',
    'Centella Asiatica': 'வல்லாரை', 'Black Seed': 'கருஞ்சீரகம்',
    'Guduchi': 'குடுச்சி', 'Punarnava': 'புனர்னவா', 'Vasaka': 'வாசகா',
    'Licorice': 'அதிமதுரம்', 'Dandelion': 'டேண்டேலியன்', 'Elderberry': 'எல்டர்பெர்ரி',
    'Calendula': 'கேலண்டுலா', 'Sunflower': 'சூரியகாந்தி', 'Nutmeg': 'ஜாதிக்காய்',
    'Andrographis': 'ஆந்திரோகிராஃபிஸ்', 'Tongkat Ali': 'டோங்கட் அலி',
    'Maca': 'மாகா', 'Rooibos': 'ரூய்போஸ்', 'Baobab': 'பாவோபாப்',
    'Goji Berry': 'கோஜி பெர்ரி', 'Astragalus': 'அஸ்ட்ராகலஸ்',
    'Reishi Mushroom': 'ரெய்ஷி காளான்', 'Saw Palmetto': 'சா பால்மெட்டோ',
    'Cranberry': 'க்ரான்பெர்ரி', 'Olive Leaf': 'ஆலிவ் இலை',
    'Valerian': 'வலேரியன்', 'Passionflower': 'பாஷன்ஃப்ளவர்',
    'Hawthorn': 'ஹாத்தோர்ன்', 'Echinacea': 'எக்கினேசியா',
    'Milk Thistle': 'மில்க் திஸ்டில்', 'Schisandra': 'ஸ்கிஸான்ட்ரா',
    'Dong Quai': 'டோங் குவாய்', 'Comfrey': 'கம்ஃப்ரி',
    'Yarrow': 'யாரோ', 'Mullein': 'முல்லீன்', 'Arnica': 'அர்னிகா',
    'Slippery Elm': 'ஸ்லிப்பரி எல்ம்', 'Witch Hazel': 'விட்ச் ஹேஜல்',
    'Black Cohosh': 'பிளாக் கோஹோஷ்', 'Guarana': 'குவாரானா',
    'Soursop': 'கஸ்டர்ட் ஆப்பிள்', 'Banaba': 'பனாபா',
    'Sambong': 'சம்போங்', 'Sarpagandha': 'சர்பகந்தா',
    'Vidanga': 'விடங்கா', 'Bibhitaki': 'தான்றிக்காய்',
    'Manjistha': 'மஞ்சிஷ்டா', 'Triphala': 'திரிபலா',
    'Cordyceps': 'கார்டிசெப்ஸ்', 'Kalmegh': 'கல்மேக்',
    'Safed Musli': 'சஃபேத் முஸ்லி', 'Chirata': 'சிராதா',
  };

  const getDisplayName = (plant) => {
    if (language === 'ta') {
      const englishName = plant?.commonName || '';
      return tamilNames[englishName] || englishName;
    }
    return plant?.commonName || 'Unknown Plant';
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.user-dropdown-wrapper')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleManageAccount = () => {
    setDropdownOpen(false);
    navigate('/manage-account');
  };

  const handleSwitchAccount = async () => {
    setDropdownOpen(false);
    await logout();
    navigate('/login');
  };

  useEffect(() => {
    try {
      import('../data/plants.js')
        .then(module => {
          const data = module.default || module.plants || [];
          setPlants(Array.isArray(data) ? data : []);
          setLoading(false);
        })
        .catch(err => {
          console.error('Plants load error:', err);
          setPlants([]);
          setLoading(false);
        });
    } catch(err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const validPlants = plants;

  const filteredPlants = useMemo(() => {
    return validPlants.filter(plant => {
      if (!plant) return false;
      const name = plant.commonName ?? plant.name ?? '';
      const sciName = plant.scientificName ?? '';
      const query = searchQuery ?? '';
      return name.toLowerCase().includes(query.toLowerCase()) || 
             sciName.toLowerCase().includes(query.toLowerCase());
    });
  }, [searchQuery, validPlants]);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const handleViewDetails = (plant) => {
    localStorage.setItem('plant_scan_result', JSON.stringify(plant));
    navigate('/result', { state: { scanResult: plant } });
  };

  if (loading) {
    return (
      <div style={{ 
        background: '#0a0a0a', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#00ff99',
        fontSize: '24px'
      }}>
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Leaf background */}
      <ParticlesBackground />
      
      {/* Absolute Navbar matching LandingPage */}
      <nav className="dashboard-nav">
        <div className="nav-logo glow-text" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          {t('appName')}
        </div>
        {/* RIGHT SIDE */}
        <div className="nav-right">
          
          {/* History Button */}
          <button className="nav-btn" onClick={() => navigate('/history')}>
            🕐 {t('history')}
          </button>

          {/* Download Button */}
          <button className="nav-btn" onClick={() => navigate('/downloads')}>
            📄 {t('download')}
          </button>

          {/* User Email Dropdown */}
          <div className="user-dropdown-wrapper">
            <button 
              className="user-email-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              👤 {user?.email}  ▾
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-email">
                  {user?.email}
                </div>
                <hr className="dropdown-divider" />
                <button className="dropdown-item" onClick={handleManageAccount}>
                  ⚙️ {t('manageAccount')}
                </button>
                <button className="dropdown-item" onClick={handleSwitchAccount}>
                  🔄 {t('switchAccount')}
                </button>
                <hr className="dropdown-divider" />
                <button className="dropdown-item logout-item" onClick={handleLogout}>
                  🚪 {t('logout')}
                </button>
              </div>
            )}
          </div>

          {/* Language Toggle */}
          <button className="lang-btn" onClick={toggleLanguage}>
            🌐 {language === 'en' ? 'தமிழ்' : 'English'}
          </button>

        </div>
      </nav>

      {/* Main Content Area */}
      <div className="dashboard-header dashboard-scanner-section">
        <div className="scanner-wrapper">
          <div className="scanner-ring"></div>
          <div className="scanner-ring"></div>
          <div className="scanner-ring"></div>
          <div className="scanner-btn" onClick={() => navigate('/scan')}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" 
                 stroke="#00ff99" strokeWidth="2">
              <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
              <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
              <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
              <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span style={{ color: '#00ff99', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', marginTop: '8px' }}>{t('scanNow')}</span>
          </div>
        </div>
        <p style={{ color: '#888', marginTop: '16px' }}>{t('scanPlant')}</p>
      </div>

      <section className="grid-section">
        {/* Controls */}
        <div className="controls-bar">
          <h2 className="glow-text text-2xl font-bold">{t('dashboardTitle')}</h2>
          
          <div className="search-box">
            <Search size={18} className="text-secondary" />
            <input 
              type="text" 
              placeholder={t('searchPlants')} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="plant-count">
            {t('showing')} {filteredPlants.length} / {validPlants.length} {t('plants')}
          </div>
        </div>

        {/* 500 Card Grid */}
        <div className="plants-grid">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant, idx) => (
              <div key={plant?.id ?? idx} className="plant-card glass-panel">
                <div className="card-header">
                  <div className="plant-icon">{plant?.emoji ?? '🌿'}</div>
                  <div className="plant-titles">
                    <h3 className="plant-name">{getDisplayName(plant)}</h3>
                    <p className="plant-scientific"><em>{plant?.scientificName ?? ''}</em></p>
                  </div>
                </div>

                <div className="plant-details" style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem', flexGrow: 1, color: '#888', fontSize: '13px', textAlign: 'left'}}>
                  <p>🌱 <b>{t('herbalUses')}:</b> {getUses(plant)}</p>
                  <p>💊 <b>{t('medicalUses')}:</b> {getMedical(plant)}</p>
                  <p>⚕️ <b>{t('diseasesTreated')}:</b> {getCures(plant)}</p>
                  <p>📍 <b>{t('habitat')}:</b> {plant?.habitat ?? '...'}</p>
                </div>

                <button className="view-btn" onClick={() => handleViewDetails(plant)}>
                  {t('viewDetails')}
                </button>
              </div>
            ))
          ) : (
            <div className="no-results">
              <Sprout size={48} className="glow-icon" style={{ margin: '0 auto 1rem auto' }} opacity={0.5} />
              <h3>{t('noData')}</h3>
              <p>Try refining your search query.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Ensure lucide icon missing fallback is imported
import { Sprout } from 'lucide-react';

export default Dashboard;

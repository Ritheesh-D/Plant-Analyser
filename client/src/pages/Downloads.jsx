import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';

const Downloads = () => {
  const navigate = useNavigate();
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    // Get download history from localStorage
    const saved = localStorage.getItem('plant_downloads');
    if (saved) {
      setDownloads(JSON.parse(saved));
    }
  }, []);

  const handleRedownload = (plant) => {
    // Re-generate PDF for this plant
    localStorage.setItem('plant_scan_result', JSON.stringify(plant));
    navigate('/result');
  };

  const handleDelete = (id) => {
    const updated = downloads.filter(d => d.id !== id);
    setDownloads(updated);
    localStorage.setItem('plant_downloads', JSON.stringify(updated));
  };

  return (
    <div style={{
      background: '#0a0a0a',
      minHeight: '100vh',
      padding: '24px',
      color: '#fff',
      position: 'relative',
      zIndex: 1
    }}>
      {/* Back button */}
      <button
        onClick={() => navigate('/dashboard')}
        style={{
          background: 'transparent',
          border: '1px solid rgba(0,255,153,0.3)',
          color: '#00ff99',
          padding: '8px 20px',
          borderRadius: '20px',
          cursor: 'pointer',
          marginBottom: '24px'
        }}
      >
        ← Back to Dashboard
      </button>

      <h1 style={{ color: '#00ff99', marginBottom: '8px' }}>
        📥 Downloads
      </h1>
      <p style={{ color: '#666', marginBottom: '32px' }}>
        Your downloaded plant PDF reports
      </p>

      {downloads.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '80px 20px',
          color: '#555'
        }}>
          <div style={{ fontSize: '60px', marginBottom: '16px' }}>📭</div>
          <p style={{ fontSize: '18px' }}>No downloads yet</p>
          <p style={{ fontSize: '14px', marginTop: '8px' }}>
            Scan a plant and download its PDF report
          </p>
          <button
            onClick={() => navigate('/scan')}
            style={{
              marginTop: '24px',
              background: 'rgba(0,255,153,0.1)',
              border: '1px solid #00ff99',
              color: '#00ff99',
              padding: '10px 24px',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            Scan Now
          </button>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {downloads.map((item) => (
            <div key={item.id} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(0,255,153,0.15)',
              borderRadius: '16px',
              padding: '20px',
              backdropFilter: 'blur(16px)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🌿</div>
              <h3 style={{ color: '#00ff99', marginBottom: '4px' }}>
                {item.commonName}
              </h3>
              <p style={{ color: '#666', fontSize: '13px', fontStyle: 'italic' }}>
                {item.scientificName}
              </p>
              <p style={{ color: '#555', fontSize: '12px', marginTop: '8px' }}>
                Downloaded: {new Date(item.downloadDate).toLocaleDateString()}
              </p>
              <div style={{
                display: 'flex',
                gap: '8px',
                marginTop: '16px'
              }}>
                <button
                  onClick={() => handleRedownload(item.plantData)}
                  style={{
                    flex: 1,
                    background: 'rgba(0,255,153,0.1)',
                    border: '1px solid #00ff99',
                    color: '#00ff99',
                    padding: '8px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}
                >
                  📄 Re-download
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{
                    background: 'rgba(255,80,80,0.1)',
                    border: '1px solid rgba(255,80,80,0.3)',
                    color: '#ff5050',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Downloads;

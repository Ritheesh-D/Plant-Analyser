import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Result = () => {
  const navigate = useNavigate();
  const { session } = useAuth();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [plant, setPlant] = useState(null);
  const [scannedImage, setScannedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isSaved, setIsSaved] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  const saveToHistory = async () => {
    if (isSaved || saveLoading) return;
    
    if (!session || !session.access_token) {
      alert("Please log in to save history");
      return;
    }

    setSaveLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      };

      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      await axios.post(`${API_URL}/user/history`, {
        plant_name: getName(),
        scientific_name: getScientific(),
        result_json: plant,
        image_url: scannedImage
      }, config);

      setIsSaved(true);
    } catch (err) {
      console.error('History Save Error:', err.message);
      alert("Failed to save to history");
    } finally {
      setSaveLoading(false);
    }
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem('plant_scan_result');
      const img = localStorage.getItem('scanned_image');

      if (!raw) { navigate('/dashboard'); return; }

      const parsed = JSON.parse(raw);
      setPlant(parsed);
      setScannedImage(img);

    } catch (err) {
      console.error(err);
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div style={{
        background: 'var(--bg)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--accent)',
        fontSize: '20px'
      }}>
        Loading results...
      </div>
    );
  }

  if (!plant) {
    return (
      <div style={{
        background: 'var(--bg)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-primary)'
      }}>
        <p>No plant data found</p>
        <button onClick={() => navigate('/scan')}
          style={{ color: 'var(--accent)', marginTop: '16px', border: '1px solid var(--accent)', background: 'transparent', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
          Go back to scan
        </button>
      </div>
    );
  }

  // Safe getter helpers matching API fallbacks exactly
  const getArray = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') {
      return value.split(/[,;]/).map(s => s.trim()).filter(Boolean);
    }
    return [];
  };

  const getName = () => plant?.commonName || plant?.name || plant?.plantName || 'Unknown Plant';
  const getScientific = () => plant?.scientificName || plant?.scientific_name || plant?.scientific || '';
  const getHerbal = () => getArray(plant?.herbalUses || plant?.herbal_uses || plant?.herbal || plant?.uses);
  const getMedical = () => getArray(plant?.medicalUses || plant?.medical_uses || plant?.medical || plant?.medicinalUses);
  const getDiseases = () => getArray(plant?.diseases || plant?.diseasesItCures || plant?.cures);
  const getForms = () => getArray(plant?.medicineForm || plant?.medicine_form || plant?.forms || plant?.medicineForms);
  const getHabitat = () => plant?.habitat || plant?.location || 'Information not available';
  const getSideEffects = () => getArray(plant?.sideEffects || plant?.side_effects || plant?.effects);
  const getConfidence = () => plant?.confidence || plant?.accuracy || null;

  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();

      // Header Background
      doc.setFillColor(10, 10, 10);
      doc.rect(0, 0, pageWidth, 50, 'F');

      // Title
      doc.setFontSize(26);
      doc.setTextColor(0, 255, 153);
      doc.text('Botanist AI Report', 20, 25);

      doc.setFontSize(10);
      doc.setTextColor(150, 150, 150);
      doc.text(`Generated on ${new Date().toLocaleDateString()}`, 20, 35);

      let y = 65;

      // Add Image if available
      if (scannedImage) {
        try {
          doc.addImage(scannedImage, 'JPEG', 20, y, 60, 60);

          // Plant Name next to image
          doc.setFontSize(22);
          doc.setTextColor(0, 0, 0);
          doc.text(getName(), 90, y + 15);

          doc.setFontSize(14);
          doc.setTextColor(100, 100, 100);
          doc.setFont('helvetica', 'italic');
          doc.text(getScientific(), 90, y + 25);

          doc.setFontSize(12);
          doc.setTextColor(0, 180, 100);
          doc.setFont('helvetica', 'bold');
          doc.text(`Confidence Score: ${getConfidence() || 'N/A'}%`, 90, y + 40);

          y += 75;
        } catch (e) {
          console.error("Image PDF error", e);
          y += 10;
        }
      } else {
        doc.setFontSize(22);
        doc.text(getName(), 20, y);
        y += 20;
      }

      const addSection = (title, items) => {
        if (!items || items.length === 0) return;

        // Check for page overflow
        if (y > 250) {
          doc.addPage();
          y = 20;
        }

        doc.setFontSize(16);
        doc.setTextColor(0, 150, 80);
        doc.setFont('helvetica', 'bold');
        doc.text(title, 20, y);
        y += 10;

        doc.setFontSize(11);
        doc.setTextColor(50, 50, 50);
        doc.setFont('helvetica', 'normal');

        items.forEach(item => {
          const lines = doc.splitTextToSize('• ' + item, pageWidth - 40);
          doc.text(lines, 25, y);
          y += (lines.length * 7);
        });

        y += 5;
      };

      addSection('Herbal & Traditional Uses', getHerbal());
      addSection('Medical Properties', getMedical());
      addSection('Diseases & Conditions Treated', getDiseases());
      addSection('Preferred Habitat', [getHabitat()]);
      addSection('Medicine Forms', getForms());
      addSection('Precautions & Side Effects', getSideEffects());

      // Footer
      doc.setFontSize(10);
      doc.setTextColor(150, 150, 150);
      doc.text('Powered by Botanist AI - Medicinal Plant Analyser', pageWidth / 2, 285, { align: 'center' });

      doc.save(`${getName().replace(/\s+/g, '_')}_Report.pdf`);

    } catch (err) {
      console.error('PDF error:', err);
      alert("Error generating PDF. Please try again.");
    }
  };

  return (
    <div className="result-container" style={{
      background: 'transparent',
      minHeight: '100vh',
      padding: '24px',
      color: 'var(--text-primary)',
      position: 'relative',
      zIndex: 1
    }}>

      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <button
          onClick={() => navigate('/dashboard')}
          style={{
            background: 'transparent',
            border: '1px solid var(--accent-glow)',
            color: 'var(--accent)',
            padding: '8px 20px',
            borderRadius: '20px',
            cursor: 'pointer'
          }}
        >
          {t('backDashboard')}
        </button>

        <button
          onClick={saveToHistory}
          disabled={isSaved || saveLoading}
          style={{
            background: isSaved ? 'var(--accent-glow)' : 'var(--glass)',
            border: `1px solid ${isSaved ? 'var(--accent)' : 'var(--glass-border)'}`,
            color: isSaved ? 'var(--accent)' : 'var(--text-primary)',
            padding: '8px 20px',
            borderRadius: '20px',
            cursor: isSaved ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease'
          }}
        >
          {saveLoading ? '⏳ Saving...' : isSaved ? '✅ Saved' : '⭐ Save'}
        </button>
      </div>

      {/* HERO SECTION - Image + Plant Name */}
      <div style={{
        background: 'var(--glass)',
        border: '1px solid var(--glass-border)',
        borderRadius: '24px',
        padding: '32px',
        marginBottom: '24px',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        boxShadow: theme === 'light' ? '0 10px 40px rgba(0,0,0,0.05)' : '0 0 30px rgba(0,255,153,0.1)'
      }}>

        {/* SCANNED IMAGE */}
        {scannedImage ? (
          <div style={{
            width: '280px', height: '280px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '3px solid var(--accent-glow)',
            boxShadow: theme === 'light' ? '0 10px 30px rgba(0,0,0,0.1)' : '0 0 30px rgba(0,255,153,0.2)',
            position: 'relative'
          }}>
            <img
              src={scannedImage}
              alt="Scanned plant"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* AI Scan overlay badge */}
            <div style={{
              position: 'absolute', bottom: '12px', left: '12px',
              background: 'var(--bg)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--accent-glow)',
              borderRadius: '20px',
              padding: '4px 12px',
              color: 'var(--accent)',
              fontSize: '12px',
              fontWeight: '600',
              opacity: 0.9
            }}>
              🤖 {t('aiScanned')}
            </div>
          </div>
        ) : (
          <div style={{
            width: '280px', height: '280px',
            borderRadius: '20px',
            background: 'var(--accent-glow)',
            border: '2px dashed var(--accent)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px',
            opacity: 0.5
          }}>
            🌿
          </div>
        )}

        {/* Plant Name + Scientific Name */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            color: 'var(--accent)', fontSize: '36px',
            fontWeight: '800', margin: '0 0 8px'
          }}>
            {getName()}
          </h1>
          <p style={{
            color: 'var(--text-secondary)', fontStyle: 'italic',
            fontSize: '18px', margin: '0 0 12px'
          }}>
            {getScientific()}
          </p>
          {getConfidence() && (
            <div style={{
              display: 'inline-block',
              background: 'var(--accent-glow)',
              border: '1px solid var(--accent)',
              borderRadius: '20px',
              padding: '6px 16px',
              color: 'var(--accent)',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              🎯 {getConfidence()}% {t('confidence')}
            </div>
          )}
        </div>
      </div>

      {/* Info Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>

        <div className="result-card" style={{
          background: 'var(--glass)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)',
          boxShadow: theme === 'light' ? '0 5px 15px rgba(0,0,0,0.02)' : 'none'
        }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '16px' }}>
            🌱 {t('herbalUses')}
          </h3>
          {getHerbal().length > 0 ? (
            getHerbal().map((use, i) => (
              <p key={i} style={{
                color: 'var(--text-main)',
                padding: '8px 0',
                borderBottom: '1px solid var(--glass-border)'
              }}>✓ {use}</p>
            ))
          ) : (
            <p style={{ color: '#666' }}>{t('noData')}</p>
          )}
        </div>

        <div className="result-card" style={{
          background: 'var(--glass)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)',
          boxShadow: theme === 'light' ? '0 5px 15px rgba(0,0,0,0.02)' : 'none'
        }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '16px' }}>
            💊 {t('medicalUses')}
          </h3>
          {getMedical().length > 0 ? (
            getMedical().map((use, i) => (
              <p key={i} style={{
                color: 'var(--text-main)',
                padding: '8px 0',
                borderBottom: '1px solid var(--glass-border)'
              }}>✓ {use}</p>
            ))
          ) : (
            <p style={{ color: '#666' }}>{t('noData')}</p>
          )}
        </div>

        <div className="result-card" style={{
          background: 'var(--glass)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)',
          boxShadow: theme === 'light' ? '0 5px 15px rgba(0,0,0,0.02)' : 'none'
        }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '16px' }}>
            ⚕️ {t('diseasesTreated')}
          </h3>
          {getDiseases().length > 0 ? (
            getDiseases().map((disease, i) => (
              <p key={i} style={{
                color: 'var(--text-main)',
                padding: '8px 0',
                borderBottom: '1px solid var(--glass-border)'
              }}>• {disease}</p>
            ))
          ) : (
            <p style={{ color: '#666' }}>{t('noData')}</p>
          )}
        </div>

        <div className="result-card" style={{
          background: 'var(--glass)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)',
          boxShadow: theme === 'light' ? '0 5px 15px rgba(0,0,0,0.02)' : 'none'
        }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '16px' }}>
            🧪 {t('medicineForms')}
          </h3>
          {getForms().length > 0 ? (
            getForms().map((form, i) => (
              <span key={i} style={{
                display: 'inline-block',
                background: 'var(--accent-glow)',
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                padding: '4px 12px',
                borderRadius: '20px',
                margin: '4px',
                fontSize: '13px',
                fontWeight: '600'
              }}>{form}</span>
            ))
          ) : (
            <p style={{ color: '#666' }}>{t('noData')}</p>
          )}
        </div>

        <div className="result-card" style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)',
          boxShadow: 'var(--shadow-neon)'
        }}>
          <h3 style={{ color: 'var(--neon-green)', marginBottom: '16px' }}>
            📍 {t('habitat')}
          </h3>
          <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>{getHabitat()}</p>
        </div>

        <div className="result-card" style={{
          background: 'var(--glass)',
          border: '1px solid rgba(255,100,100,0.3)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)',
          boxShadow: theme === 'light' ? '0 10px 30px rgba(255,100,100,0.05)' : 'none'
        }}>
          <h3 style={{ color: '#ff6464', marginBottom: '16px' }}>
            ⚠️ {t('sideEffects')}
          </h3>
          {getSideEffects().length > 0 ? (
            getSideEffects().map((effect, i) => (
              <p key={i} style={{
                color: 'var(--text-main)',
                padding: '8px 0',
                borderBottom: '1px solid var(--glass-border)'
              }}>• {effect}</p>
            ))
          ) : (
            <p style={{ color: '#666' }}>{t('noData')}</p>
          )}
        </div>
      </div>

      <button
        onClick={handleDownloadPDF}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          background: 'var(--accent)',
          color: theme === 'light' ? '#fff' : '#0a0a0a',
          border: 'none',
          borderRadius: '50px',
          padding: '14px 28px',
          fontWeight: '700',
          fontSize: '14px',
          cursor: 'pointer',
          boxShadow: `0 10px 30px var(--accent-glow)`,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s ease'
        }}
      >
        📄 {t('downloadPDF')}
      </button>
    </div>
  );
};

export default Result;

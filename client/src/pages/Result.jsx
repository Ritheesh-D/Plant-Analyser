import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import { supabase } from '../services/supabase';
import { useLanguage } from '../context/LanguageContext';

const Result = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [plant, setPlant] = useState(null);
  const [scannedImage, setScannedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Try multiple localStorage keys to ensure data maps safely across the UI routing
      const raw = 
        localStorage.getItem('plant_scan_result') ||
        localStorage.getItem('scanResult') ||
        localStorage.getItem('plantResult');
      const img = localStorage.getItem('scanned_image');

      if (!raw) {
        console.error('No scan result found in localStorage');
        navigate('/dashboard');
        return;
      }

      const parsed = JSON.parse(raw);
      console.log('Plant data loaded:', parsed); // Debug log
      setPlant(parsed);
      setScannedImage(img);
      
      const saveHistory = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session && !localStorage.getItem(`saved_${parsed.id || parsed.commonName}`)) {
          await supabase.from('scan_history').insert({
            user_id: session.user.id,
            plant_name: parsed.commonName || parsed.name || 'Unknown',
            scientific_name: parsed.scientificName || 'Unknown',
            result_json: parsed,
            image_url: img || null,
            scan_date: new Date().toISOString()
          });
          localStorage.setItem(`saved_${parsed.id || parsed.commonName}`, 'true');
        }
      };
      saveHistory();

    } catch (err) {
      console.error('Parse error:', err);
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return (
      <div style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#00ff99',
        fontSize: '20px'
      }}>
        Loading results...
      </div>
    );
  }

  if (!plant) {
    return (
      <div style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }}>
        <p>No plant data found</p>
        <button onClick={() => navigate('/scan')}
          style={{ color: '#00ff99', marginTop: '16px', border: '1px solid #00ff99', background: 'transparent', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
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
      
      doc.setFontSize(22);
      doc.setTextColor(0, 255, 153);
      doc.text(getName(), 20, 30);
      
      doc.setFontSize(14);
      doc.setTextColor(100, 100, 100);
      doc.text(getScientific(), 20, 42);
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      
      let y = 60;
      
      doc.setFontSize(14);
      doc.text('Herbal Uses:', 20, y); y += 8;
      doc.setFontSize(11);
      getHerbal().forEach(use => { doc.text('• ' + use, 25, y); y += 7; });
      
      y += 5;
      doc.setFontSize(14);
      doc.text('Medical Uses:', 20, y); y += 8;
      doc.setFontSize(11);
      getMedical().forEach(use => { doc.text('• ' + use, 25, y); y += 7; });
      
      y += 5;
      doc.setFontSize(14);
      doc.text('Diseases Treated:', 20, y); y += 8;
      doc.setFontSize(11);
      getDiseases().forEach(d => { doc.text('• ' + d, 25, y); y += 7; });
      
      y += 5;
      doc.setFontSize(14);
      doc.text('Habitat:', 20, y); y += 8;
      doc.setFontSize(11);
      const habitatLines = doc.splitTextToSize(getHabitat(), 170);
      doc.text(habitatLines, 25, y); y += (habitatLines.length * 7);
      
      doc.save(`${getName().replace(/[^a-zA-Z0-9]/g, '_')}_plant_details.pdf`);

      // Save to downloads history
      const downloads = JSON.parse(localStorage.getItem('plant_downloads') || '[]');
      const newDownload = {
        id: Date.now(),
        commonName: getName(),
        scientificName: getScientific(),
        downloadDate: new Date().toISOString(),
        plantData: plant
      };
      downloads.unshift(newDownload); // Add to beginning
      localStorage.setItem('plant_downloads', JSON.stringify(downloads));

    } catch (err) {
      console.error('PDF error:', err);
      window.print();
    }
  };

  return (
    <div className="result-container" style={{
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
        {t('backDashboard')}
      </button>

      {/* HERO SECTION - Image + Plant Name */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,255,153,0.08), rgba(0,255,153,0.02))',
        border: '1px solid rgba(0,255,153,0.2)',
        borderRadius: '24px',
        padding: '32px',
        marginBottom: '24px',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>

        {/* SCANNED IMAGE */}
        {scannedImage ? (
          <div style={{
            width: '280px', height: '280px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '3px solid rgba(0,255,153,0.4)',
            boxShadow: '0 0 40px rgba(0,255,153,0.2)',
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
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(0,255,153,0.4)',
              borderRadius: '20px',
              padding: '4px 12px',
              color: '#00ff99',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              🤖 {t('aiScanned')}
            </div>
          </div>
        ) : (
          <div style={{
            width: '280px', height: '280px',
            borderRadius: '20px',
            background: 'rgba(0,255,153,0.05)',
            border: '2px dashed rgba(0,255,153,0.3)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px'
          }}>
            🌿
          </div>
        )}

        {/* Plant Name + Scientific Name */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            color: '#00ff99', fontSize: '36px',
            fontWeight: '800', margin: '0 0 8px'
          }}>
            {getName()}
          </h1>
          <p style={{
            color: '#888', fontStyle: 'italic',
            fontSize: '18px', margin: '0 0 12px'
          }}>
            {getScientific()}
          </p>
          {getConfidence() && (
            <div style={{
              display: 'inline-block',
              background: 'rgba(0,255,153,0.1)',
              border: '1px solid rgba(0,255,153,0.3)',
              borderRadius: '20px',
              padding: '6px 16px',
              color: '#00ff99',
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
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(0,255,153,0.15)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)'
        }}>
          <h3 style={{ color: '#00ff99', marginBottom: '16px' }}>
            🌱 {t('herbalUses')}
          </h3>
          {getHerbal().length > 0 ? (
            getHerbal().map((use, i) => (
              <p key={i} style={{
                color: '#ccc',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>✓ {use}</p>
            ))
          ) : (
            <p style={{ color: '#666' }}>{t('noData')}</p>
          )}
        </div>

        <div className="result-card" style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(0,255,153,0.15)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)'
        }}>
          <h3 style={{ color: '#00ff99', marginBottom: '16px' }}>
            💊 {t('medicalUses')}
          </h3>
          {getMedical().length > 0 ? (
            getMedical().map((use, i) => (
              <p key={i} style={{
                color: '#ccc',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>✓ {use}</p>
            ))
          ) : (
            <p style={{ color: '#666' }}>{t('noData')}</p>
          )}
        </div>

        <div className="result-card" style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(0,255,153,0.15)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)'
        }}>
          <h3 style={{ color: '#00ff99', marginBottom: '16px' }}>
            ⚕️ {t('diseasesTreated')}
          </h3>
          {getDiseases().length > 0 ? (
            getDiseases().map((disease, i) => (
              <p key={i} style={{
                color: '#ccc',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>• {disease}</p>
            ))
          ) : (
            <p style={{ color: '#666' }}>{t('noData')}</p>
          )}
        </div>

        <div className="result-card" style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(0,255,153,0.15)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)'
        }}>
          <h3 style={{ color: '#00ff99', marginBottom: '16px' }}>
            🧪 {t('medicineForms')}
          </h3>
          {getForms().length > 0 ? (
            getForms().map((form, i) => (
              <span key={i} style={{
                display: 'inline-block',
                background: 'rgba(0,255,153,0.1)',
                border: '1px solid rgba(0,255,153,0.3)',
                color: '#00ff99',
                padding: '4px 12px',
                borderRadius: '20px',
                margin: '4px',
                fontSize: '13px'
              }}>{form}</span>
            ))
          ) : (
            <p style={{ color: '#666' }}>{t('noData')}</p>
          )}
        </div>

        <div className="result-card" style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(0,255,153,0.15)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)'
        }}>
          <h3 style={{ color: '#00ff99', marginBottom: '16px' }}>
            📍 {t('habitat')}
          </h3>
          <p style={{ color: '#ccc', lineHeight: '1.6' }}>{getHabitat()}</p>
        </div>

        <div className="result-card" style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,100,100,0.15)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(16px)'
        }}>
          <h3 style={{ color: '#ff6464', marginBottom: '16px' }}>
            ⚠️ {t('sideEffects')}
          </h3>
          {getSideEffects().length > 0 ? (
            getSideEffects().map((effect, i) => (
              <p key={i} style={{
                color: '#ccc',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
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
          background: '#00ff99',
          color: '#0a0a0a',
          border: 'none',
          borderRadius: '50px',
          padding: '14px 28px',
          fontWeight: '700',
          fontSize: '14px',
          cursor: 'pointer',
          boxShadow: '0 0 30px rgba(0,255,153,0.4)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        📄 {t('downloadPDF')}
      </button>
    </div>
  );
};

export default Result;

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import jsPDF from 'jspdf';
import { useLanguage } from '../context/LanguageContext';
import allPlants from '../data/plants.js';

const PlantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find plant by ID from the local database
    const foundPlant = allPlants.find(p => p.id === parseInt(id));
    if (foundPlant) {
      setPlant(foundPlant);
    }
    setLoading(false);
  }, [id]);

  const getName = () => plant?.commonName || 'Unknown Plant';
  const getScientific = () => plant?.scientificName || '';
  const getArray = (val) => Array.isArray(val) ? val : [];
  
  const handleDownloadPDF = () => {
    if (!plant) return;
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      
      doc.setFillColor(10, 10, 10);
      doc.rect(0, 0, pageWidth, 40, 'F');

      doc.setFontSize(24);
      doc.setTextColor(0, 255, 153);
      doc.text(getName(), 20, 25);
      
      let y = 55;
      doc.setFontSize(14);
      doc.setTextColor(100, 100, 100);
      doc.setFont('helvetica', 'italic');
      doc.text(getScientific(), 20, y);
      y += 20;

      const addSection = (title, items) => {
        if (!items || items.length === 0) return;
        if (y > 260) { doc.addPage(); y = 20; }
        
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

      addSection('Herbal Uses', getArray(plant.herbalUses));
      addSection('Medical Properties', getArray(plant.medicalUses));
      addSection('Diseases Treated', getArray(plant.diseases));
      addSection('Habitat', [plant.habitat]);
      if (plant.description) addSection('Description', [plant.description]);

      doc.save(`${getName().replace(/\s+/g, '_')}_Details.pdf`);
    } catch (err) {
      console.error('PDF Error:', err);
    }
  };

  if (loading) return <div style={{background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00ff99'}}>Loading...</div>;
  if (!plant) return <div style={{background: '#0a0a0a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff'}}><p>Plant not found</p><button onClick={() => navigate('/dashboard')} style={{color: '#00ff99', background: 'transparent', border: '1px solid #00ff99', padding: '8px 16px', borderRadius: '8px', marginTop: '16px', cursor: 'pointer'}}>Back to Dashboard</button></div>;

  return (
    <div style={{
      background: '#000',
      minHeight: '100vh',
      color: '#fff',
      padding: '40px 20px',
      fontFamily: "'Inter', sans-serif",
      animation: 'fadeIn 0.5s ease-out'
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .detail-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 255, 153, 0.1);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .detail-section:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 255, 153, 0.3);
        }
        .section-title {
          color: #00ff99;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .section-content {
          color: #bbb;
          line-height: 1.6;
          font-size: 15px;
        }
      `}</style>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Back Button */}
        <button 
          onClick={() => navigate('/dashboard')}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#00ff99',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            marginBottom: '32px',
            opacity: 0.8,
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
        >
          <ArrowLeft size={18} /> {t('backToDashboard') || 'Back to Dashboard'}
        </button>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '900',
            color: '#fff',
            margin: '0 0 8px',
            textShadow: '0 0 20px rgba(0, 255, 153, 0.3)'
          }}>
            {getName()}
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#888',
            fontStyle: 'italic'
          }}>
            {getScientific()}
          </p>
        </div>

        {/* Content Sections */}
        <div className="detail-section">
          <div className="section-title">🌿 {t('herbalUses')}</div>
          <div className="section-content">
            {getArray(plant.herbalUses).map((use, i) => (
              <div key={i} style={{ marginBottom: '8px', display: 'flex', gap: '8px' }}>
                <span style={{ color: '#00ff99' }}>•</span> {use}
              </div>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <div className="section-title">💊 {t('medicalUses')}</div>
          <div className="section-content">
            {getArray(plant.medicalUses).map((use, i) => (
              <div key={i} style={{ marginBottom: '8px', display: 'flex', gap: '8px' }}>
                <span style={{ color: '#00ff99' }}>•</span> {use}
              </div>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <div className="section-title">⚕️ {t('diseasesTreated')}</div>
          <div className="section-content">
            {getArray(plant.diseases).map((disease, i) => (
              <div key={i} style={{ marginBottom: '8px', display: 'flex', gap: '8px' }}>
                <span style={{ color: '#00ff99' }}>•</span> {disease}
              </div>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <div className="section-title">📍 {t('habitat')}</div>
          <div className="section-content">
            {plant.habitat}
          </div>
        </div>

        {plant.description && (
          <div className="detail-section">
            <div className="section-title">📝 {t('description') || 'Description'}</div>
            <div className="section-content">
              {plant.description}
            </div>
          </div>
        )}

        {/* PDF Button */}
        <button
          onClick={handleDownloadPDF}
          style={{
            width: '100%',
            background: 'linear-gradient(45deg, #00ff99, #00cc7a)',
            color: '#000',
            border: 'none',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '40px',
            boxShadow: '0 10px 30px rgba(0, 255, 153, 0.2)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 255, 153, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 255, 153, 0.2)';
          }}
        >
          <FileText size={20} /> {t('downloadPDF') || 'Download PDF Report'}
        </button>
      </div>
    </div>
  );
};

export default PlantDetail;

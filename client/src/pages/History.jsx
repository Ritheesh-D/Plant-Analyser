import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import { History as HistoryIcon, Search, Calendar, Trash2, ChevronRight, Leaf, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import '../styles/History.css';

function History() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useLanguage();
  
  const [historyFiles, setHistoryFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [searchName, setSearchName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchHistory = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('scan_history')
        .select('*')
        .eq('user_id', user.id)
        .order('scan_date', { ascending: false });

      if (error) throw error;
      setHistoryFiles(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this scan record?")) return;

    try {
      const { error } = await supabase
        .from('scan_history')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;

      // Update UI 
      setHistoryFiles(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete record.");
    }
  };

  const navigateToDetails = (resultJson) => {
    navigate('/result', { state: { scanResult: resultJson } });
  };

  // Filter application
  const filteredHistory = historyFiles.filter(item => {
    // Name filter
    const matchesName = item.plant_name?.toLowerCase().includes(searchName.toLowerCase());
    
    // Date filter
    const itemDate = new Date(item.scan_date);
    let passesStartDate = true;
    let passesEndDate = true;
    
    if (startDate) {
      passesStartDate = itemDate >= new Date(startDate);
    }
    if (endDate) {
      // Add 1 day to end date to make it inclusive of the end day
      const endD = new Date(endDate);
      endD.setDate(endD.getDate() + 1);
      passesEndDate = itemDate < endD;
    }

    return matchesName && passesStartDate && passesEndDate;
  });

  return (
    <div className="history-container">
      
      <div style={{ maxWidth: '1200px', margin: '0 auto 1.5rem auto' }}>
        <button className="btn-outline glow-hover" onClick={() => navigate('/dashboard')} style={{ padding: '0.4rem 1rem' }}>
          {t('backDashboard')}
        </button>
      </div>

      <div className="history-header">
        <h1 className="history-title glow-text">
          <HistoryIcon size={36} className="text-accent" />
          {t('historyTitle')}
        </h1>

        {/* Filter Controls */}
        <div className="history-controls">
          <div style={{ position: 'relative', flex: 1, minWidth: '250px' }}>
            <Search size={18} className="text-secondary" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              className="filter-input" 
              placeholder={t('searchPlaceholder')}
              style={{ paddingLeft: '2.2rem', width: '100%' }}
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          <div className="date-inputs">
            <Calendar size={18} className="text-secondary" />
            <input 
              type="date" 
              className="filter-input" 
              style={{ minWidth: 'auto' }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span className="text-secondary">to</span>
            <input 
              type="date" 
              className="filter-input"
              style={{ minWidth: 'auto' }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      {error && <div className="error-box" style={{ maxWidth: '1200px', margin: '0 auto 2rem auto' }}>{error}</div>}

      <div className="history-grid">
        {loading ? (
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>Loading history...</div>
        ) : historyFiles.length === 0 ? (
          <div className="empty-state glass-panel">
            <Leaf size={64} className="text-secondary opacity-50" />
            <div>
              <h2 className="text-primary mb-2">{t('noHistory')}</h2>
              <p className="text-secondary">Explore the world outside and discover new medicinal herbs.</p>
            </div>
            <button className="btn-primary" onClick={() => navigate('/scan')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <ScanLine size={18} /> {t('goScan')}
            </button>
          </div>
        ) : filteredHistory.length === 0 ? (
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No scans match your current filters.
          </div>
        ) : (
          filteredHistory.map(item => {
            const dateObj = new Date(item.scan_date);
            
            // Generate a short preview of the JSON details
            let previewText = "No details available.";
            if (item.result_json) {
              const uses = item.result_json.herbalUses || item.result_json.medicalUses || [];
              if (uses.length > 0) {
                previewText = Array.isArray(uses) ? uses[0] : uses;
              }
            }

            return (
              <div key={item.id} className="history-card glass-panel">
                <div className="history-info">
                  <div className="history-plant-name">{item.plant_name}</div>
                  <div className="history-meta">
                    <span>{dateObj.toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{dateObj.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })}</span>
                  </div>
                  <p className="text-secondary" style={{ fontSize: '0.9rem', marginTop: '0.2rem', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    Preview: {previewText}
                  </p>
                </div>

                <div className="history-actions">
                  <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                    <Trash2 size={16} /> {t('deleteBtn')}
                  </button>
                  <button className="btn-outline glow-hover" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }} onClick={() => navigateToDetails(item.result_json)}>
                    {t('viewFullDetails')} <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}

// Needed explicit import for empty state
import { ScanLine } from 'lucide-react';

export default History;

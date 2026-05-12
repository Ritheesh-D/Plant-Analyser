import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const ManageAccount = () => {
  const navigate = useNavigate();
  const { user: authUser, logout, session } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const [profile, setProfile] = useState({ username: '', email: '' });
  const [passwords, setPasswords] = useState({ 
    current: '', newPass: '', confirm: '' 
  });
  const [scanCount, setScanCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState('');

  const [history, setHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
  
  const getConfig = () => ({
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
  });

  useEffect(() => {
    if (!authUser) {
      // Small delay to allow session hydration
      const timer = setTimeout(() => {
         if(!session) navigate('/login');
      }, 1000);
      return () => clearTimeout(timer);
    }
    
    // Set profile from user data
    setProfile({
      username: authUser?.username || 'User',
      email: authUser?.email || '',
    });

    fetchHistory();
  }, [authUser, session]);

  const fetchHistory = async () => {
    if (!session) return;
    setHistoryLoading(true);
    try {
      const { data } = await axios.get(`${API_URL}/user/history`, getConfig());
      setHistory(data || []);
      setScanCount(data?.length || 0);
    } catch (error) {
      console.error('Fetch history error:', error);
    }
    setHistoryLoading(false);
  };

  const deleteHistoryItem = async (id) => {
    if (!window.confirm('Delete this scan?')) return;
    try {
      await axios.delete(`${API_URL}/user/history/${id}`, getConfig());
      setHistory(history.filter(item => item._id !== id && item.id !== id));
      setScanCount(prev => prev - 1);
    } catch (error) {
      console.error('Delete history error:', error);
      alert('Failed to delete history item');
    }
  };

  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      const { data } = await axios.put(`${API_URL}/user/profile`, {
        username: profile.username
      }, getConfig());

      setMessage({ text: 'Profile updated successfully!', type: 'success' });
    } catch (error) {
      setMessage({ text: 'Failed to update profile: ' + (error.response?.data?.message || error.message), type: 'error' });
    }
    setLoading(false);
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const handleChangePassword = async () => {
    if (passwords.newPass !== passwords.confirm) {
      setMessage({ text: 'Passwords do not match!', type: 'error' });
      return;
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;
    if (!regex.test(passwords.newPass) || passwords.newPass.length < 8) {
      setMessage({ text: 'Password does not meet requirements!', type: 'error' });
      return;
    }
    setLoading(true);
    try {
      await axios.put(`${API_URL}/user/profile/password`, { 
        newPassword: passwords.newPass 
      }, getConfig());

      setMessage({ text: 'Password updated successfully!', type: 'success' });
      setPasswords({ current: '', newPass: '', confirm: '' });
    } catch (error) {
      setMessage({ text: 'Password update failed: ' + (error.response?.data?.message || error.message), type: 'error' });
    }
    setLoading(false);
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirm !== 'DELETE') {
      setMessage({ text: 'Type DELETE to confirm', type: 'error' });
      return;
    }
    try {
      // Delete from MongoDB (User + History)
      await axios.delete(`${API_URL}/user/profile`, getConfig());
      
      // Sign out locally
      await logout();
      navigate('/signup');
    } catch (error) {
      setMessage({ text: 'Failed to delete account: ' + (error.response?.data?.message || error.message), type: 'error' });
    }
  };

  const getInitial = () => profile.username?.[0]?.toUpperCase() || 
                           profile.email?.[0]?.toUpperCase() || 'U';

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  return (
    <div style={{
      background: 'var(--bg)',
      minHeight: '100vh',
      color: 'var(--text-primary)',
      padding: '24px',
      position: 'relative',
      zIndex: 1
    }}>

      {/* Back Button */}
      <button onClick={() => navigate('/dashboard')} style={{
        background: 'transparent',
        border: '1px solid var(--accent)',
        color: 'var(--accent)',
        padding: '8px 20px',
        borderRadius: '20px',
        cursor: 'pointer',
        marginBottom: '32px',
        fontSize: '14px'
      }}>
        ← {t('backToDashboard') || 'Back to Dashboard'}
      </button>

      {/* Page Title */}
      <h1 style={{ 
        color: 'var(--accent)', 
        fontSize: '32px', 
        marginBottom: '8px',
        textAlign: 'center'
      }}>
        {t('manageTitle')}
      </h1>
      <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '40px' }}>
        Manage your profile and preferences
      </p>

      {/* Success/Error Message */}
      {message.text && (
        <div style={{
          background: message.type === 'success' 
            ? 'rgba(0,255,153,0.1)' : 'rgba(255,80,80,0.1)',
          border: `1px solid ${message.type === 'success' ? 'var(--accent)' : 'var(--danger)'}`,
          color: message.type === 'success' ? 'var(--accent)' : 'var(--danger)',
          padding: '12px 20px',
          borderRadius: '12px',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          {message.text}
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>

        {/* SECTION 1: Profile */}
        <div style={{
          background: 'var(--glass)',
          border: '1px solid var(--glass-border)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(16px)'
        }}>
          <h2 style={{ color: 'var(--accent)', marginBottom: '24px' }}>
            👤 {t('profileSection')}
          </h2>

          {/* Avatar */}
          <div style={{
            width: '80px', height: '80px',
            borderRadius: '50%',
            background: 'var(--accent-glow)',
            border: '2px solid var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '32px', fontWeight: '800', color: 'var(--accent)',
            margin: '0 auto 24px',
            boxShadow: '0 0 20px var(--accent-glow)'
          }}>
            {getInitial()}
          </div>

          {/* Username */}
          <label style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Username</label>
          <input
            type="text"
            value={profile.username}
            onChange={(e) => setProfile({...profile, username: e.target.value})}
            style={{
              width: '100%', padding: '12px 16px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--glass-border)',
              borderRadius: '12px', color: 'var(--text-primary)',
              fontSize: '14px', marginBottom: '16px',
              marginTop: '6px', outline: 'none',
              boxSizing: 'border-box'
            }}
          />

          {/* Email (readonly) */}
          <label style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
            Email (cannot change)
          </label>
          <input
            type="email"
            value={profile.email}
            readOnly
            style={{
              width: '100%', padding: '12px 16px',
              background: 'var(--bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '12px', color: 'var(--text-secondary)',
              fontSize: '14px', marginBottom: '20px',
              marginTop: '6px', outline: 'none',
              boxSizing: 'border-box', cursor: 'not-allowed'
            }}
          />

          <button onClick={handleSaveProfile} disabled={loading} style={{
            width: '100%', padding: '12px',
            background: 'var(--accent)', color: 'var(--bg)',
            border: 'none', borderRadius: '12px',
            fontWeight: '700', fontSize: '15px',
            cursor: 'pointer',
            boxShadow: '0 0 20px var(--accent-glow)'
          }}>
            {loading ? 'Saving...' : t('saveChanges')}
          </button>
        </div>

        {/* SECTION 2: Change Password */}
        <div style={{
          background: 'var(--glass)',
          border: '1px solid var(--glass-border)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(16px)'
        }}>
          <h2 style={{ color: 'var(--accent)', marginBottom: '24px' }}>
            🔐 {t('changePassword')}
          </h2>

          {['current', 'newPass', 'confirm'].map((field, i) => (
            <div key={field} style={{ marginBottom: '16px' }}>
              <label style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
                {field === 'current' ? 'Current Password' : 
                 field === 'newPass' ? 'New Password' : 'Confirm New Password'}
              </label>
              <input
                type="password"
                value={passwords[field]}
                onChange={(e) => setPasswords({...passwords, [field]: e.target.value})}
                style={{
                  width: '100%', padding: '12px 16px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px', color: 'var(--text-primary)',
                  fontSize: '14px', marginTop: '6px',
                  outline: 'none', boxSizing: 'border-box'
                }}
              />
            </div>
          ))}

          {/* Password rules */}
          <div style={{ marginBottom: '20px' }}>
            {[
              ['8+ characters', passwords.newPass.length >= 8],
              ['Lowercase (a-z)', /[a-z]/.test(passwords.newPass)],
              ['Uppercase (A-Z)', /[A-Z]/.test(passwords.newPass)],
              ['Number (0-9)', /\d/.test(passwords.newPass)],
              ['Special symbol', /[!@#$%^&*]/.test(passwords.newPass)],
            ].map(([rule, met]) => (
              <p key={rule} style={{ 
                color: met ? 'var(--accent)' : 'var(--text-secondary)', 
                fontSize: '12px', margin: '4px 0' 
              }}>
                {met ? '✓' : '○'} {rule}
              </p>
            ))}
          </div>

          <button onClick={handleChangePassword} disabled={loading} style={{
            width: '100%', padding: '12px',
            background: 'transparent',
            border: '1px solid var(--accent)',
            color: 'var(--accent)', borderRadius: '12px',
            fontWeight: '700', fontSize: '15px',
            cursor: 'pointer'
          }}>
            {t('updatePassword')}
          </button>
        </div>

        {/* SECTION 3: Account Info */}
        <div style={{
          background: 'var(--glass)',
          border: '1px solid var(--glass-border)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(16px)'
        }}>
          <h2 style={{ color: 'var(--accent)', marginBottom: '24px' }}>
            📊 {t('accountInfo')}
          </h2>

          {[
            [t('memberSince'), formatDate(authUser?.created_at)],
            ['Email', profile.email],
            [t('totalScans'), scanCount + ' plants scanned'],
            [t('accountStatus'), t('active')],
            ['Plan', 'Free Plan'],
          ].map(([label, value]) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '12px 0',
              borderBottom: '1px solid var(--glass-border)'
            }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{label}</span>
              <span style={{ color: 'var(--text-primary)', fontSize: '14px' }}>{value}</span>
            </div>
          ))}
        </div>

        {/* SECTION 4: Preferences */}
        <div style={{
          background: 'var(--glass)',
          border: '1px solid var(--glass-border)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(16px)'
        }}>
          <h2 style={{ color: 'var(--accent)', marginBottom: '24px' }}>
            ⚙️ {t('preferences')}
          </h2>

          {/* Language Toggle */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginBottom: '20px'
          }}>
            <span style={{ color: 'var(--text-secondary)' }}>{t('language')}</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['en', 'ta'].map(lang => (
                <button key={lang} onClick={() => {if(language !== lang) toggleLanguage();}} style={{
                  padding: '6px 16px', borderRadius: '20px',
                  border: '1px solid var(--accent)',
                  background: language === lang 
                    ? 'var(--accent)' : 'transparent',
                  color: language === lang ? 'var(--bg)' : 'var(--text-primary)',
                  cursor: 'pointer', fontWeight: '600'
                }}>
                  {lang === 'en' ? 'English' : 'தமிழ்'}
                </button>
              ))}
            </div>
          </div>

          {/* Theme */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginBottom: '20px'
          }}>
            <span style={{ color: 'var(--text-primary)' }}>{t('theme')}</span>
            <button 
              onClick={toggleTheme}
              style={{
                padding: '6px 16px', borderRadius: '20px',
                background: 'var(--accent)', color: 'var(--bg)',
                fontWeight: '600', fontSize: '13px',
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px'
              }}
            >
              {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </div>

        {/* SECTION 6: Scan History */}
        <div style={{
          background: 'var(--glass)',
          border: '1px solid var(--glass-border)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(16px)',
          gridColumn: '1 / -1',
          marginTop: '24px'
        }}>
          <h2 style={{ color: 'var(--accent)', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>📜 {t('scanHistory') || 'Scan History'}</span>
            <span style={{ fontSize: '14px', background: 'var(--accent-glow)', padding: '4px 12px', borderRadius: '20px' }}>{history.length} Scans</span>
          </h2>

          {historyLoading ? (
             <p style={{ textAlign: 'center', color: 'var(--accent)' }}>Loading history...</p>
          ) : history.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {history.map((item) => (
                <div key={item._id || item.id} style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '16px',
                  padding: '16px',
                  position: 'relative'
                }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{
                      width: '60px', height: '60px', borderRadius: '12px',
                      background: 'rgba(0,255,153,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '24px', overflow: 'hidden'
                    }}>
                      {item.image_url ? (
                        <img src={item.image_url} alt={item.plant_name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : '🌿'}
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 4px', color: 'var(--accent)' }}>{item.plant_name}</h4>
                      <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)' }}>
                        {formatDate(item.scan_date)}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => deleteHistoryItem(item._id || item.id)}
                    style={{
                      position: 'absolute', top: '12px', right: '12px',
                      background: 'transparent', border: 'none',
                      color: 'var(--danger)', cursor: 'pointer', fontSize: '18px'
                    }}
                  >
                    🗑️
                  </button>
                  <button 
                    onClick={() => {
                      localStorage.setItem('plant_scan_result', JSON.stringify(item.result_json));
                      localStorage.setItem('scanned_image', item.image_url || '');
                      navigate('/result');
                    }}
                    style={{
                      width: '100%', marginTop: '16px',
                      padding: '8px', background: 'rgba(0,255,153,0.1)',
                      border: '1px solid var(--accent)', color: 'var(--accent)',
                      borderRadius: '8px', cursor: 'pointer', fontSize: '12px',
                      fontWeight: '600'
                    }}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <p style={{ color: 'var(--text-secondary)' }}>No scan history found yet.</p>
              <button onClick={() => navigate('/scan')} style={{
                background: 'var(--accent)', color: 'var(--bg)',
                border: 'none', padding: '10px 24px', borderRadius: '20px',
                marginTop: '16px', cursor: 'pointer', fontWeight: '700'
              }}>
                Start Scanning
              </button>
            </div>
          )}
        </div>

        {/* SECTION 5: Danger Zone */}
        <div style={{
          background: 'rgba(255,50,50,0.04)',
          border: '1px solid var(--danger)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(16px)',
          gridColumn: '1 / -1'
        }}>
          <h2 style={{ color: 'var(--danger)', marginBottom: '8px' }}>
            ⚠️ {t('dangerZone')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '14px' }}>
            Deleting your account is permanent and cannot be undone.
          </p>
          <button onClick={() => setDeleteModal(true)} style={{
            background: 'transparent',
            border: '1px solid var(--danger)',
            color: 'var(--danger)', padding: '12px 28px',
            borderRadius: '12px', cursor: 'pointer',
            fontWeight: '700', fontSize: '14px'
          }}>
            🗑️ {t('deleteAccount')}
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', zIndex: 999
        }}>
          <div style={{
            background: 'var(--bg)', border: '1px solid var(--danger)',
            borderRadius: '20px', padding: '32px',
            maxWidth: '400px', width: '90%', textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--danger)', marginBottom: '12px' }}>
              Delete Account?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '14px' }}>
              This will permanently delete your history. Type DELETE to confirm.
            </p>
            <input
              type="text"
              placeholder='Type "DELETE"'
              value={deleteConfirm}
              onChange={(e) => setDeleteConfirm(e.target.value)}
              style={{
                width: '100%', padding: '12px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--danger)',
                borderRadius: '10px', color: 'var(--text-primary)',
                marginBottom: '16px', outline: 'none',
                boxSizing: 'border-box', textAlign: 'center',
                fontSize: '16px', letterSpacing: '2px'
              }}
            />
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => {
                setDeleteModal(false);
                setDeleteConfirm('');
              }} style={{
                flex: 1, padding: '12px',
                background: 'transparent',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)', borderRadius: '10px',
                cursor: 'pointer'
              }}>
                Cancel
              </button>
              <button onClick={handleDeleteAccount} style={{
                flex: 1, padding: '12px',
                background: 'var(--danger)', border: 'none',
                color: '#fff', borderRadius: '10px',
                cursor: 'pointer', fontWeight: '700'
              }}>
                Clear All Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAccount;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import { useLanguage } from '../context/LanguageContext';

const ManageAccount = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ username: '', email: '' });
  const [passwords, setPasswords] = useState({ 
    current: '', newPass: '', confirm: '' 
  });
  const [scanCount, setScanCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { navigate('/login'); return; }
    setUser(user);

    // Get profile
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (profileData) {
      setProfile({
        username: profileData.username || '',
        email: user.email || '',
        language: profileData.language_preference || 'en'
      });
      // Language context automatically hydrates globally
    }

    // Get scan count
    const { count } = await supabase
      .from('scan_history')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id);
    setScanCount(count || 0);
  };

  const handleSaveProfile = async () => {
    setLoading(true);
    const { error } = await supabase
      .from('profiles')
      .update({ 
        username: profile.username,
        language_preference: language
      })
      .eq('id', user.id);

    if (error) {
      setMessage({ text: 'Failed to update profile', type: 'error' });
    } else {
      setMessage({ text: 'Profile updated successfully!', type: 'success' });
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
    const { error } = await supabase.auth.updateUser({ 
      password: passwords.newPass 
    });
    if (error) {
      setMessage({ text: 'Password update failed: ' + error.message, type: 'error' });
    } else {
      setMessage({ text: 'Password updated successfully!', type: 'success' });
      setPasswords({ current: '', newPass: '', confirm: '' });
    }
    setLoading(false);
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirm !== 'DELETE') {
      setMessage({ text: 'Type DELETE to confirm', type: 'error' });
      return;
    }
    // Delete scan history
    await supabase.from('scan_history').delete().eq('user_id', user.id);
    // Delete profile
    await supabase.from('profiles').delete().eq('id', user.id);
    // Sign out
    await supabase.auth.signOut();
    navigate('/signup');
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
      background: '#0a0a0a',
      minHeight: '100vh',
      color: '#fff',
      padding: '24px',
      position: 'relative',
      zIndex: 1
    }}>

      {/* Back Button */}
      <button onClick={() => navigate('/dashboard')} style={{
        background: 'transparent',
        border: '1px solid rgba(0,255,153,0.3)',
        color: '#00ff99',
        padding: '8px 20px',
        borderRadius: '20px',
        cursor: 'pointer',
        marginBottom: '32px',
        fontSize: '14px'
      }}>
        ← Back to Dashboard
      </button>

      {/* Page Title */}
      <h1 style={{ 
        color: '#00ff99', 
        fontSize: '32px', 
        marginBottom: '8px',
        textAlign: 'center'
      }}>
        {t('manageTitle')}
      </h1>
      <p style={{ color: '#666', textAlign: 'center', marginBottom: '40px' }}>
        Manage your profile and preferences
      </p>

      {/* Success/Error Message */}
      {message.text && (
        <div style={{
          background: message.type === 'success' 
            ? 'rgba(0,255,153,0.1)' : 'rgba(255,80,80,0.1)',
          border: `1px solid ${message.type === 'success' ? '#00ff99' : '#ff6464'}`,
          color: message.type === 'success' ? '#00ff99' : '#ff6464',
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
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(0,255,153,0.15)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(16px)'
        }}>
          <h2 style={{ color: '#00ff99', marginBottom: '24px' }}>
            👤 {t('profileSection')}
          </h2>

          {/* Avatar */}
          <div style={{
            width: '80px', height: '80px',
            borderRadius: '50%',
            background: 'rgba(0,255,153,0.2)',
            border: '2px solid #00ff99',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '32px', fontWeight: '800', color: '#00ff99',
            margin: '0 auto 24px',
            boxShadow: '0 0 20px rgba(0,255,153,0.3)'
          }}>
            {getInitial()}
          </div>

          {/* Username */}
          <label style={{ color: '#888', fontSize: '13px' }}>Username</label>
          <input
            type="text"
            value={profile.username}
            onChange={(e) => setProfile({...profile, username: e.target.value})}
            style={{
              width: '100%', padding: '12px 16px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(0,255,153,0.2)',
              borderRadius: '12px', color: '#fff',
              fontSize: '14px', marginBottom: '16px',
              marginTop: '6px', outline: 'none',
              boxSizing: 'border-box'
            }}
          />

          {/* Email (readonly) */}
          <label style={{ color: '#888', fontSize: '13px' }}>
            Email (cannot change)
          </label>
          <input
            type="email"
            value={profile.email}
            readOnly
            style={{
              width: '100%', padding: '12px 16px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px', color: '#666',
              fontSize: '14px', marginBottom: '20px',
              marginTop: '6px', outline: 'none',
              boxSizing: 'border-box', cursor: 'not-allowed'
            }}
          />

          <button onClick={handleSaveProfile} disabled={loading} style={{
            width: '100%', padding: '12px',
            background: '#00ff99', color: '#0a0a0a',
            border: 'none', borderRadius: '12px',
            fontWeight: '700', fontSize: '15px',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(0,255,153,0.3)'
          }}>
            {loading ? 'Saving...' : t('saveChanges')}
          </button>
        </div>

        {/* SECTION 2: Change Password */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(0,255,153,0.15)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(16px)'
        }}>
          <h2 style={{ color: '#00ff99', marginBottom: '24px' }}>
            🔐 {t('changePassword')}
          </h2>

          {['current', 'newPass', 'confirm'].map((field, i) => (
            <div key={field} style={{ marginBottom: '16px' }}>
              <label style={{ color: '#888', fontSize: '13px' }}>
                {field === 'current' ? 'Current Password' : 
                 field === 'newPass' ? 'New Password' : 'Confirm New Password'}
              </label>
              <input
                type="password"
                value={passwords[field]}
                onChange={(e) => setPasswords({...passwords, [field]: e.target.value})}
                style={{
                  width: '100%', padding: '12px 16px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(0,255,153,0.2)',
                  borderRadius: '12px', color: '#fff',
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
              ['Number (0-9)', /\\d/.test(passwords.newPass)],
              ['Special symbol', /[!@#$%^&*]/.test(passwords.newPass)],
            ].map(([rule, met]) => (
              <p key={rule} style={{ 
                color: met ? '#00ff99' : '#555', 
                fontSize: '12px', margin: '4px 0' 
              }}>
                {met ? '✓' : '○'} {rule}
              </p>
            ))}
          </div>

          <button onClick={handleChangePassword} disabled={loading} style={{
            width: '100%', padding: '12px',
            background: 'rgba(0,255,153,0.1)',
            border: '1px solid #00ff99',
            color: '#00ff99', borderRadius: '12px',
            fontWeight: '700', fontSize: '15px',
            cursor: 'pointer'
          }}>
            {t('updatePassword')}
          </button>
        </div>

        {/* SECTION 3: Account Info */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(0,255,153,0.15)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(16px)'
        }}>
          <h2 style={{ color: '#00ff99', marginBottom: '24px' }}>
            📊 {t('accountInfo')}
          </h2>

          {[
            [t('memberSince'), formatDate(user?.created_at)],
            ['Email', profile.email],
            [t('totalScans'), scanCount + ' plants scanned'],
            [t('accountStatus'), t('active')],
            ['Plan', 'Free Plan'],
          ].map(([label, value]) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '12px 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <span style={{ color: '#888', fontSize: '14px' }}>{label}</span>
              <span style={{ color: '#fff', fontSize: '14px' }}>{value}</span>
            </div>
          ))}
        </div>

        {/* SECTION 4: Preferences */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(0,255,153,0.15)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(16px)'
        }}>
          <h2 style={{ color: '#00ff99', marginBottom: '24px' }}>
            ⚙️ {t('preferences')}
          </h2>

          {/* Language Toggle */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginBottom: '20px'
          }}>
            <span style={{ color: '#ccc' }}>{t('language')}</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['en', 'ta'].map(lang => (
                <button key={lang} onClick={() => {if(language !== lang) toggleLanguage();}} style={{
                  padding: '6px 16px', borderRadius: '20px',
                  border: '1px solid rgba(0,255,153,0.3)',
                  background: language === lang 
                    ? '#00ff99' : 'transparent',
                  color: language === lang ? '#0a0a0a' : '#fff',
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
            <span style={{ color: '#ccc' }}>{t('theme')}</span>
            <span style={{
              padding: '6px 16px', borderRadius: '20px',
              background: '#00ff99', color: '#0a0a0a',
              fontWeight: '600', fontSize: '13px'
            }}>🌙 Dark</span>
          </div>

          <button onClick={handleSaveProfile} style={{
            width: '100%', padding: '12px',
            background: 'rgba(0,255,153,0.1)',
            border: '1px solid rgba(0,255,153,0.3)',
            color: '#00ff99', borderRadius: '12px',
            fontWeight: '700', cursor: 'pointer'
          }}>
            {t('saveChanges')}
          </button>
        </div>

        {/* SECTION 5: Danger Zone */}
        <div style={{
          background: 'rgba(255,50,50,0.04)',
          border: '1px solid rgba(255,80,80,0.3)',
          borderRadius: '20px',
          padding: '28px',
          backdropFilter: 'blur(16px)',
          gridColumn: '1 / -1'
        }}>
          <h2 style={{ color: '#ff6464', marginBottom: '8px' }}>
            ⚠️ {t('dangerZone')}
          </h2>
          <p style={{ color: '#888', marginBottom: '20px', fontSize: '14px' }}>
            Deleting your account is permanent and cannot be undone.
          </p>
          <button onClick={() => setDeleteModal(true)} style={{
            background: 'rgba(255,80,80,0.1)',
            border: '1px solid #ff6464',
            color: '#ff6464', padding: '12px 28px',
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
            background: '#111', border: '1px solid #ff6464',
            borderRadius: '20px', padding: '32px',
            maxWidth: '400px', width: '90%', textAlign: 'center'
          }}>
            <h3 style={{ color: '#ff6464', marginBottom: '12px' }}>
              Delete Account?
            </h3>
            <p style={{ color: '#888', marginBottom: '20px', fontSize: '14px' }}>
              This will permanently delete all your data. Type DELETE to confirm.
            </p>
            <input
              type="text"
              placeholder='Type "DELETE"'
              value={deleteConfirm}
              onChange={(e) => setDeleteConfirm(e.target.value)}
              style={{
                width: '100%', padding: '12px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,80,80,0.4)',
                borderRadius: '10px', color: '#fff',
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
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff', borderRadius: '10px',
                cursor: 'pointer'
              }}>
                Cancel
              </button>
              <button onClick={handleDeleteAccount} style={{
                flex: 1, padding: '12px',
                background: '#ff6464', border: 'none',
                color: '#fff', borderRadius: '10px',
                cursor: 'pointer', fontWeight: '700'
              }}>
                Delete Forever
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAccount;

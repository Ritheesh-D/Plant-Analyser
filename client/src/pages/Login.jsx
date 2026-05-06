import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { supabase } from '../services/supabase';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Auth.css';

function Login() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!formData.identifier || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      let targetEmail = formData.identifier;
      
      // If the user typed a username instead of an email, fetch the mapped email from profiles
      if (!targetEmail.includes('@')) {
        const { data: profile, error: profileErr } = await supabase
          .from('profiles')
          .select('email')
          .eq('username', formData.identifier.trim())
          .single();
          
        if (profile?.email) {
          targetEmail = profile.email;
        } else {
           throw new Error("Invalid credentials");
        }
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: targetEmail,
        password: formData.password
      });

      if (error) throw error; // Will automatically throw "Invalid login credentials"

      navigate('/dashboard');

    } catch (err) {
      // Generalize the error exactly as explicitly requested
      setError(t('invalidCredentials'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass-panel">
        <div className="auth-header">
          <h1 className="auth-title glow-text">{t('loginTitle')}</h1>
          <p className="text-secondary">{t('loginSubtitle')}</p>
        </div>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label>{t('usernameLabel')} OR {t('emailLabel')}</label>
            <div className="input-wrapper">
              <input 
                type="text"
                name="identifier"
                className="auth-input"
                placeholder="Enter your email or username"
                value={formData.identifier}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>{t('passwordLabel')}</label>
            <div className="input-wrapper">
              <input 
                type={showPassword ? "text" : "password"}
                name="password"
                className="auth-input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-primary auth-btn" disabled={loading}>
            {loading ? "Authenticating..." : t('loginBtn')}
          </button>
        </form>

        <div className="auth-footer" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <Link to="/forgot-password" className="auth-link" style={{ fontWeight: 'normal' }}>{t('forgotPassword')}</Link>
          <div>{t('noAccount')} <Link to="/signup" className="auth-link">{t('signUpLink')}</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Login;

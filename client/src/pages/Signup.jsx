import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Check, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Auth.css';

function Signup() {
  const navigate = useNavigate();
  const { signup, loginWithGoogle } = useAuth();
  const { t } = useLanguage();
  
  // Form State
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // UI State
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validation State
  const [validations, setValidations] = useState({
    length: false,
    lower: false,
    upper: false,
    number: false,
    symbol: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Evaluate Password rules in real-time
  useEffect(() => {
    const p = formData.password;
    setValidations({
      length: p.length >= 8,
      lower: /[a-z]/.test(p),
      upper: /[A-Z]/.test(p),
      number: /[0-9]/.test(p),
      symbol: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(p)
    });
  }, [formData.password]);

  // Calculate strength percentage (0 to 100)
  const strengthScore = Object.values(validations).filter(Boolean).length;
  const strengthPercentage = (strengthScore / 5) * 100;
  
  let strengthColor = '#ff4444'; // Red
  if (strengthScore === 5) strengthColor = '#00ff99'; // Neon Green
  else if (strengthScore >= 3) strengthColor = '#ffa700'; // Orange

  const isFormValid = () => {
    if (strengthScore !== 5) {
      setError("Please ensure your password meets all requirements.");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    if (!formData.username || !formData.email) {
      setError("Please fill in all fields.");
      return false;
    }
    return true;
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (err) {
      setError(err.message || "Google Login failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!isFormValid()) return;

    setLoading(true);

    try {
      const data = await signup(formData.username, formData.email, formData.password);
      
      if (data?.session) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        // Supabase often requires email confirmation by default
        setSuccess(true);
        setError("Account created! Please check your email to confirm your account before logging in.");
      }
    } catch (err) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass-panel">
        <div className="auth-header">
          <h1 className="auth-title glow-text">{t('signupTitle')}</h1>
          <p className="text-secondary">{t('signupSubtitle')}</p>
        </div>

        {error && <div className="error-box">{error}</div>}
        {success && <div className="success-box">Account created successfully! Redirecting to dashboard...</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label>First Name</label>
            <div className="input-wrapper">
              <input 
                type="text"
                name="username"
                className="auth-input"
                placeholder="Enter your first name"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>{t('emailLabel')}</label>
            <div className="input-wrapper">
              <input 
                type="email"
                name="email"
                className="auth-input"
                placeholder="you@example.com"
                value={formData.email}
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
                placeholder="Create a strong password"
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
            
            {formData.password.length > 0 && (
              <div className="password-metrics">
                <div className="strength-bar-container">
                  <div 
                    className="strength-bar" 
                    style={{ width: `${strengthPercentage}%`, backgroundColor: strengthColor }}
                  ></div>
                </div>
                <div className="validation-rules">
                  <div className={`rule-item ${validations.length ? 'valid' : ''}`}>
                    {validations.length ? <Check size={14} /> : <X size={14} />} {t('req8chars')}
                  </div>
                  <div className={`rule-item ${validations.lower ? 'valid' : ''}`}>
                    {validations.lower ? <Check size={14} /> : <X size={14} />} {t('reqLower')}
                  </div>
                  <div className={`rule-item ${validations.upper ? 'valid' : ''}`}>
                    {validations.upper ? <Check size={14} /> : <X size={14} />} {t('reqUpper')}
                  </div>
                  <div className={`rule-item ${validations.number ? 'valid' : ''}`}>
                    {validations.number ? <Check size={14} /> : <X size={14} />} {t('reqNumber')}
                  </div>
                  <div className={`rule-item ${validations.symbol ? 'valid' : ''}`}>
                    {validations.symbol ? <Check size={14} /> : <X size={14} />} {t('reqSpecial')}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="input-group">
            <label>{t('confirmPasswordLabel')}</label>
            <div className="input-wrapper">
              <input 
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className="auth-input"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-primary auth-btn" 
            disabled={loading || strengthScore !== 5 || formData.password !== formData.confirmPassword}
          >
            {loading ? "Creating Account..." : t('signupBtn')}
          </button>
        </form>

        <div className="social-login">
          <div className="social-divider">
            <span>OR</span>
          </div>
          <div className="social-btns">
            <button className="social-btn google" onClick={handleGoogleLogin}>
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="20" />
              Continue with Google
            </button>
          </div>
        </div>

        <div className="auth-footer" style={{ marginTop: '2rem' }}>
          {t('hasAccount')} <Link to="/login" className="auth-link">{t('loginLink')}</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;

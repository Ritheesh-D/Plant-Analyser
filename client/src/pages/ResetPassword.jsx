import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Check, X } from 'lucide-react';
import { supabase } from '../services/supabase';
import '../styles/Auth.css';

function ResetPassword() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const strengthScore = Object.values(validations).filter(Boolean).length;
  const strengthPercentage = (strengthScore / 5) * 100;
  
  let strengthColor = '#ff4444';
  if (strengthScore === 5) strengthColor = '#00ff99';
  else if (strengthScore >= 3) strengthColor = '#ffa700';

  const isFormValid = () => {
    if (strengthScore !== 5) {
      setError("Please ensure your password meets all requirements.");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!isFormValid()) return;

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: formData.password
      });

      if (error) throw error;

      setSuccess(true);
      
      setTimeout(() => {
         navigate('/login', { state: { message: "Password updated successfully! Please login." } });
      }, 2500);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass-panel">
        <div className="auth-header">
          <h1 className="auth-title glow-text">Set New Password</h1>
          <p className="text-secondary">Please enter your new secure password.</p>
        </div>

        {error && <div className="error-box">{error}</div>}
        {success && <div className="success-box">Password updated! Redirecting to login...</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label>New Password</label>
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
                    {validations.length ? <Check size={14} /> : <X size={14} />} Minimum 8 characters
                  </div>
                  <div className={`rule-item ${validations.lower ? 'valid' : ''}`}>
                    {validations.lower ? <Check size={14} /> : <X size={14} />} Lowercase letter (a-z)
                  </div>
                  <div className={`rule-item ${validations.upper ? 'valid' : ''}`}>
                    {validations.upper ? <Check size={14} /> : <X size={14} />} Uppercase letter (A-Z)
                  </div>
                  <div className={`rule-item ${validations.number ? 'valid' : ''}`}>
                    {validations.number ? <Check size={14} /> : <X size={14} />} Number (0-9)
                  </div>
                  <div className={`rule-item ${validations.symbol ? 'valid' : ''}`}>
                    {validations.symbol ? <Check size={14} /> : <X size={14} />} Special symbol (!@#$%^&*)
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="input-group">
            <label>Confirm New Password</label>
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
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;

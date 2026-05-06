import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { supabase } from '../services/supabase';
import '../styles/Auth.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    
    // Explicitly requested simple mock or strict validation on recaptcha
    if (!captchaToken && import.meta.env.VITE_RECAPTCHA_SITE_KEY) {
      setError("Please complete the reCAPTCHA.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;
      setSuccess(true);
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
          <h1 className="auth-title glow-text">Forgot Password</h1>
          <p className="text-secondary">We'll email you a reset link.</p>
        </div>

        {error && <div className="error-box">{error}</div>}
        {success && <div className="success-box">Reset link sent to your email</div>}

        {!success && (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <label>Registered Email Address</label>
              <div className="input-wrapper">
                <input 
                  type="email"
                  className="auth-input"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* reCAPTCHA v2 Display Check */}
            {import.meta.env.VITE_RECAPTCHA_SITE_KEY ? (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                  theme="dark"
                />
              </div>
            ) : (
                <div style={{fontSize:'0.8rem', color:'var(--text-secondary)', textAlign:'center', marginTop: '0.5rem'}}>
                    *reCAPTCHA disabled (missing site key in .env)*
                </div>
            )}

            <button type="submit" className="btn-primary auth-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        )}

        <div className="auth-footer">
          Remember your password? <Link to="/login" className="auth-link">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

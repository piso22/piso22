import React, { useState } from 'react';

const Login = ({ onLogin, onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Credentials for testing
  const VALID_USERNAME = "admin";
  const VALID_PASSWORD = "password2026";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      {/* Background glow for consistency */}
      <div className="ambient-glow" style={{ opacity: 0.15 }}></div>

      <form onSubmit={handleSubmit} className="login-card" style={{ zIndex: 10 }}>
        <h2 className="brand-title" style={{ fontSize: '2.5rem', marginBottom: '30px' }}>
          Portal<span className="accent-dot">.</span>
        </h2>
        
        <input 
          type="text" 
          placeholder="Username" 
          className="login-input"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          className="login-input"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        
        {error && <p style={{ color: 'var(--accent-orange)', fontSize: '12px', marginBottom: '15px' }}>{error}</p>}
        
        <button type="submit" className="submit-btn">Access</button>
        
        {/* Back to Homepage Button */}
        <button type="button" className="back-btn" onClick={onBack}>
          ← Back to Homepage
        </button>
      </form>
    </div>
  );
};

export default Login;
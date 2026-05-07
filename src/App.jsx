import React, { useState } from 'react';
import Login from './Login'; // Import the component
import './App.css';

function App() {
  const [view, setView] = useState('landing');

  if (view === 'landing') {
    return (
      <div className="hero-container">
        <nav className="top-nav">
          <button className="login-btn" onClick={() => setView('login')}>Login</button>
        </nav>
        
        <div className="ambient-glow"></div>

        <div className="content-wrapper">
          <h1 className="brand-title">Piso 22<span className="accent-dot">.</span></h1>
          <h2 className="brand-subtitle">
            Venture Capital by Investing in <span className="highlight-text">you.</span>
          </h2>

          {/* Social Links Section - Nested inside content-wrapper for left alignment */}
          <div className="social-links">
            <a href="mailto:investpiso22@gmail.com" className="icon-link" title="Email Us">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            
            <a href="https://www.linkedin.com/company/piso22/" target="_blank" rel="noopener noreferrer" className="icon-link" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div> 
      </div> 
    );
  }

  if (view === 'login') {
    // Render the imported component instead of inline HTML
    return <Login onLogin={() => setView('portal')} onBack={() => setView('landing')} />;
  }

  return (
    <div className="portal-container">
       <nav className="top-nav">
          <button className="login-btn" onClick={() => setView('landing')}>Logout</button>
       </nav>
      <h1 className="brand-title">Internal Portal</h1>
    </div>
  );
}

export default App;
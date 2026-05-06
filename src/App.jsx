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
          {/* Social links omitted for brevity */}
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
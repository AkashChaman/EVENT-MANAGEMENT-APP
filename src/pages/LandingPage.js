// src/pages/LandingPage.js
// Landing page with introduction and call-to-action buttons

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  // Redirect to events if already logged in
  React.useEffect(() => {
    if (currentUser) {
      navigate('/events');
    }
  }, [currentUser, navigate]);

  return (
    <div className="landing-page">
      <div className="landing-hero">
        <div className="hero-content">
          <div className="hero-icon">📅</div>
          <h1 className="hero-title">Welcome to EventHub</h1>
          <p className="hero-subtitle">
            Your all-in-one solution for managing and tracking events
          </p>
          <p className="hero-description">
            Stay organized with our intuitive event management platform. 
            Track upcoming events, get real-time countdowns, and never miss 
            an important moment.
          </p>
          
          <div className="cta-buttons">
            <button 
              className="cta-btn cta-primary" 
              onClick={() => navigate('/auth')}
            >
              Get Started
            </button>
            <button 
              className="cta-btn cta-secondary" 
              onClick={() => navigate('/auth')}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="features-title">Why Choose EventHub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure Authentication</h3>
            <p>Your data is protected with Firebase Authentication</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Live Countdowns</h3>
            <p>Real-time countdown timers for all your events</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Access your events on any device, anywhere</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Easy to Use</h3>
            <p>Clean and intuitive interface for effortless management</p>
          </div>
        </div>
      </div>

      <footer className="landing-footer">
        <p>&copy; 2026 EventHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

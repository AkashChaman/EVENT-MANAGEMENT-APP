// src/components/Navbar.js
// Navigation bar component with logout functionality

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <span className="logo-icon">📅</span>
          <span className="logo-text">EventHub</span>
        </div>
        
        {currentUser && (
          <div className="navbar-menu">
            <button 
              className="nav-link" 
              onClick={() => navigate('/events')}
            >
              My Events
            </button>
            <div className="user-info">
              <span className="user-email">{currentUser.email}</span>
              <button 
                className="logout-btn" 
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

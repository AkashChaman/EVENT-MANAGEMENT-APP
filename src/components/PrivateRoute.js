// src/components/PrivateRoute.js
// Protected route component that redirects to login if user is not authenticated

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // Redirect to login if not authenticated
  return currentUser ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;

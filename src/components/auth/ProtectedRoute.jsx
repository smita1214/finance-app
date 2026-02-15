import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// Phase 1 - Step 3: Wrapper component that checks login status
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Checking authentication...</div>;

  if (!user) {
    // If not logged in, kick back to login page
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
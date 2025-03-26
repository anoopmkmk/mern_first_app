// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const ProtectedRoute = () => {
  const { user } = useContext(AuthContext); // Check authentication state

  return user ? <Outlet /> : <Navigate to="/admin" />; // Redirect to login if not authenticated
};

export default ProtectedRoute;

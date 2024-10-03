import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // If token is not found, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If token exists, render the child components
  return children;
};

export default ProtectedRoute;

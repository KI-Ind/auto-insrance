import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from './LoadingSpinner';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireGuest?: boolean;
}

export default function AuthGuard({ 
  children, 
  requireAuth = false, 
  requireGuest = false 
}: AuthGuardProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/connexion" state={{ from: location }} replace />;
  }

  if (requireGuest && isAuthenticated) {
    return <Navigate to="/tableau-de-bord" replace />;
  }

  return <>{children}</>;
}
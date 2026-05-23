import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

import Loader from "./ui/Loader";

function ProtectedRoute({ children, role }) {

  const { user, loading } = useAuth();

  const location = useLocation();

  // Wait until authentication finishes loading
  if (loading) {
    return <Loader />;
  }

  // Redirect guests to login
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  // Restrict access by role
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
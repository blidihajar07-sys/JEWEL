import { useAuth } from "../context/AuthContext";

import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children, role }) {

  const { user, loading } = useAuth();

  const location = useLocation();

  // WAIT until auth finishes loading
  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  // NOT LOGGED IN
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  // ROLE PROTECTION
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
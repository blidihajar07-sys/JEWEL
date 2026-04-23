// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children, role }) {
//   const user = JSON.parse(localStorage.getItem("user"));

//   // not logged in
//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   // wrong role
//   if (role && user.role !== role) {
//     return <Navigate to="/" />;
//   }

//   return children;
// }

// export default ProtectedRoute;
function ProtectedRoute({ children }) {
  return children;
}

export default ProtectedRoute;
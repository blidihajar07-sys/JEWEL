import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ background: "black", color: "white", padding: "10px" }}>
      
      {/* USER LINKS */}
      {(!user || user.role === "user") && (
        <>
          <Link to="/">Home</Link> | 
          <Link to="/products">Products</Link> | 
          <Link to="/cart">Cart</Link> |
          <Link to="/orders">Orders</Link>
        </>
      )}

      {/* ADMIN LINKS */}
      {user?.role === "admin" && (
        <>
          <Link to="/admin">Dashboard</Link> | 
          <Link to="/admin/products">Products</Link> | 
          <Link to="/admin/orders">Orders</Link>
        </>
      )}

      {" | "}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
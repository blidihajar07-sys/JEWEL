import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#ddd", padding: "10px" }}>
      <h3>Admin</h3>

      <Link to="/admin">Dashboard</Link>
      <br />

      <Link to="/admin/products">Products</Link>
      <br />

      <Link to="/admin/orders">Orders</Link>
    </div>
  );
}

export default Sidebar;
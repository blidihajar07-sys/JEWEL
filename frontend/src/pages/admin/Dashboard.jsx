import AdminLayout from "../../components/layouts/AdminLayout";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <AdminLayout>
      <h1>Admin Dashboard</h1>

      <p>
        <Link to="/admin/products">Manage Products</Link>
      </p>

      <p>
        <Link to="/admin/orders">Manage Orders</Link>
      </p>
    </AdminLayout>
  );
}

export default Dashboard;
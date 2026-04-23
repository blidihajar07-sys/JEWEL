import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </div>

    </div>
  );
}

export default AdminLayout;
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* TOP NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="flex">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN */}
        <main className="flex-1 p-8">
          {children}
        </main>

      </div>
    </div>
  );
}

export default AdminLayout;


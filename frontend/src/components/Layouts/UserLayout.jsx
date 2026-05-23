import Navbar from "./Navbar";
import Footer from "./Footer";

function UserLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full py-6">
        <div className="max-w-7xl mx-auto px-4">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default UserLayout;
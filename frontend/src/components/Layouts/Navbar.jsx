import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart(); // ✅ FIXED
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const totalItems = cart?.reduce((sum, i) => sum + (i.quantity || 0), 0) || 0;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#DCEAF4]/90 via-[#FAF7F2]/90 to-[#F3DDE5]/90 backdrop-blur-md border-b border-white/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to={user?.role === "admin" ? "/admin" : "/"} className="flex items-center gap-4">
          <img
            src="/images/logo3p.png"
            alt="Logo"
            className="h-16 w-auto object-contain"
          />

          <div>
            <h1 className="text-[#384152] text-xl font-bold">
              <span className="text-[#D4B06A]">Serene</span> Spark
            </h1>
            <p className="text-xs text-[#384152]/70">Soft luxury jewelry</p>
          </div>
        </Link>

        {/* LINKS */}
        {user?.role === "user" && (
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="hover:text-[#D4B06A]">Home</Link>
            <Link to="/products" className="hover:text-[#D4B06A]">Products</Link>
            <Link to="/orders" className="hover:text-[#D4B06A]">Orders</Link>
          </nav>
        )}

        {user?.role === "admin" && (
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/admin" className="hover:text-[#D4B06A]">Dashboard</Link>
            <Link to="/admin/products" className="hover:text-[#D4B06A]">Products</Link>
            <Link to="/admin/orders" className="hover:text-[#D4B06A]">Orders</Link>
          </nav>
        )}

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {!user ? (
            <Link
              to="/login"
              className="px-5 py-2 rounded-full bg-[#D4B06A] text-white text-sm"
            >
              Login
            </Link>
          ) : (
            <>
              {user?.role === "user" && (
                <Link to="/cart" className="relative">
                  <ShoppingCart size={22} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                      {totalItems}
                    </span>
                  )}
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-full bg-[#D4B06A] text-white text-sm"
              >
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </header>
  );
}

export default Navbar;
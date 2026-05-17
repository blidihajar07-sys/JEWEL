import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Store
} from "lucide-react";

function Sidebar() {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all
    ${
      isActive
        ? "bg-[#D4B06A] text-white shadow-sm"
        : "text-[#384152] hover:bg-[#F3E7CF]"
    }`;

  return (
    <aside className="w-72 min-h-screen bg-white border-r border-[#EFE3C8] p-6">

      {/* TITLE */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#384152]">
          Admin Panel
        </h2>

        <p className="text-sm text-[#384152]/60 mt-1">
          Store management
        </p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-3">

        <NavLink to="/admin" end className={linkClass}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink to="/admin/products" className={linkClass}>
          <ShoppingBag size={20} />
          Products
        </NavLink>

        <NavLink to="/admin/orders" className={linkClass}>
          <Package size={20} />
          Orders
        </NavLink>

        {/* VIEW STORE */}
        <NavLink to="/" className={linkClass}>
          <Store size={20} />
          View Store
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;
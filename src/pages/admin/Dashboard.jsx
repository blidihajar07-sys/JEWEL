import { Link } from "react-router-dom";

import {
  ShoppingBag,
  Package,
  CircleDollarSign,
  Eye
} from "lucide-react";

function Dashboard() {

  const stats = [
    {
      title: "Products",
      value: "16",
      icon: <ShoppingBag size={22} />,
    },

    {
      title: "Orders",
      value: "8",
      icon: <Package size={22} />,
    },

    {
      title: "Revenue",
      value: "14,500 MAD",
      icon: <CircleDollarSign size={22} />,
    },
  ];

  return (
    <div>

      {/* PAGE TITLE */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold text-[#384152]">
          Dashboard
        </h1>

        <p className="text-[#384152]/60 mt-2">
          Welcome back, admin.
        </p>

      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white border border-[#EFE3C8] rounded-3xl p-6 shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-[#384152]/60">
                  {stat.title}
                </p>

                <h2 className="text-3xl font-bold text-[#384152] mt-2">
                  {stat.value}
                </h2>
              </div>

              <div className="bg-[#F3E7CF] p-4 rounded-2xl text-[#D4B06A]">
                {stat.icon}
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* QUICK ACTIONS */}
      <div className="mt-10 bg-white border border-[#EFE3C8] rounded-3xl p-6">

        <h2 className="text-2xl font-semibold text-[#384152] mb-6">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            to="/admin/products/add"
            className="px-6 py-3 rounded-2xl bg-[#D4B06A] text-white"
          >
            Add Product
          </Link>

          <Link
            to="/admin/orders"
            className="px-6 py-3 rounded-2xl border border-[#D4B06A] text-[#D4B06A]"
          >
            View Orders
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-[#D4B06A] text-[#D4B06A]"
          >
            <Eye size={18} />
            View Store
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
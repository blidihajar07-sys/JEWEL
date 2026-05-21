import { Link } from "react-router-dom";

import {
  ShoppingBag,
  Package,
  CircleDollarSign,
  Eye
} from "lucide-react";

import { useEffect, useState } from "react";

import { getDashboardStats } from "../../services/dashboardService";

function Dashboard() {

  const [stats, setStats] = useState(null);

  useEffect(() => {

    const loadDashboard = async () => {
      const data = await getDashboardStats();
      setStats(data);
    };

    loadDashboard();

  }, []);

  if (!stats) {
    return <p>Loading...</p>;
  }

  const cards = [
    {
      title: "Products",
      value: stats.products,
      icon: <ShoppingBag size={22} />,
    },

    {
      title: "Orders",
      value: stats.orders,
      icon: <Package size={22} />,
    },

    {
      title: "Revenue",
      value: `${Number(stats.revenue).toFixed(2)} MAD`,
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

        {cards.map((stat) => (
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

      {/* LATEST ORDERS */}
      <div className="mt-10 bg-white border border-[#EFE3C8] rounded-3xl p-6">

        <h2 className="text-2xl font-semibold text-[#384152] mb-6">
          Latest Orders
        </h2>

        <div className="space-y-4">

          {stats.latestOrders.map((order) => (

            <div
              key={order.id}
              className="flex items-center justify-between border-b pb-4"
            >

              <div>

                <h3 className="font-semibold text-[#384152]">
                  Order #{order.id}
                </h3>

                <p className="text-sm text-[#384152]/60">
                  {order.user?.name}
                </p>

              </div>

              <div className="text-right">

                <p className="font-semibold text-[#D4B06A]">
                  {Number(order.total_price).toFixed(2)} MAD
                </p>

                <p className="text-sm text-[#384152]/60">
                  {order.status}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
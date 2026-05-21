import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getAllOrders,
  updateOrderStatus
} from "../../../services/orderService";

function OrdersList() {

  const [orders, setOrders] = useState([]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentFilter, setPaymentFilter] = useState("all");

  const loadOrders = async () => {
    const data = await getAllOrders();
    setOrders(data);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleStatusChange = async (id, status) => {

    await updateOrderStatus(id, status);

    loadOrders();
  };
  const filteredOrders = orders.filter((order) => {
    
    const matchesSearch =
      order.user?.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      order.id.toString().includes(search);

    const matchesStatus =
      statusFilter === "all"
        ? true
        : order.status === statusFilter;

    const matchesPayment =
      paymentFilter === "all"
        ? true
        : order.payment_method
            ?.toLowerCase()
            .includes(paymentFilter.toLowerCase());

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPayment
    );
  });

  return (
    <div>

      {/* HEADER */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold text-[#384152]">
          Orders Management
        </h1>

        <p className="text-[#384152]/60 mt-2">
          Manage customer orders
        </p>

      </div>

      {/* SEARCH + FILTERS */}
      <div className="bg-white border border-[#EFE3C8] rounded-3xl p-5 mb-8">
        
        <input
          type="text"
          placeholder="Search by customer or order id..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#FAF7F2] border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
         />
         
          <div className="flex flex-wrap gap-3 mt-5">
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-[#EFE3C8] rounded-2xl px-4 py-3"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
              className="border border-[#EFE3C8] rounded-2xl px-4 py-3"
            >
              <option value="all">All Payments</option>
              <option value="cash">Cash on delivery</option>
              <option value="card">Credit Card</option>
            </select>
            
          </div>
      </div>

      {/* ORDERS */}
      <div className="space-y-5">

        {orders.length === 0 ? (

          <div className="bg-white border border-[#EFE3C8] rounded-3xl p-10 text-center">
            <p className="text-[#384152]/60">
              No orders found
            </p>
          </div>

        ) : (

          filteredOrders.map((order) => (

            <div
              key={order.id}
              className="bg-white border border-[#EFE3C8] rounded-3xl p-6 shadow-sm"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {/* LEFT */}
                <div>

                  <h2 className="text-2xl font-semibold text-[#384152]">
                    Order #{order.id}
                  </h2>

                  <p className="text-sm text-[#384152]/60 mt-1">
                    Customer: {order.user?.name}
                  </p>

                  <p className="text-sm text-[#384152]/60">
                    {order.user?.email}
                  </p>

                  <p className="text-sm text-[#384152]/60 mt-2">
                    {order.items?.length} product(s)
                  </p>

                </div>

                {/* CENTER */}
                <div>

                  <p className="text-2xl font-bold text-[#D4B06A]">
                    {Number(order.total_price).toFixed(2)} MAD
                  </p>

                  <p className="text-sm text-[#384152]/60 mt-1">
                    {order.payment_method}
                  </p>

                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-4">

                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    className="border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
                  >

                    <option value="pending">
                      Pending
                    </option>

                    <option value="paid">
                      Paid
                    </option>

                    <option value="shipped">
                      Shipped
                    </option>

                    <option value="delivered">
                      Delivered
                    </option>

                    <option value="cancelled">
                      Cancelled
                    </option>

                  </select>

                  <Link
                    to={`/admin/orders/${order.id}`}
                    className="text-center px-5 py-3 rounded-2xl bg-[#D4B06A] text-white"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default OrdersList;
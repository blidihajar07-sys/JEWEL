import AdminLayout from "../../../components/layouts/AdminLayout";
import { useEffect, useState } from "react";

function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(stored);
  }, []);

  return (
    <AdminLayout>
      <h1>All Orders (Admin)</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h3>Order #{order.id}</h3>
            <p>User: {order.user}</p>
            <p>Total: ${order.total}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      )}
    </AdminLayout>
  );
}

export default OrdersList;
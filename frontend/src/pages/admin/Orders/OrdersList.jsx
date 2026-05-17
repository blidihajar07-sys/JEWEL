import { useEffect, useState } from "react";
import { getAllOrders } from "../../../services/orderService";

function OrdersList() {
  const [orders, setOrders] = useState([]);

  

  useEffect(() => {
    const loadOrders = async () => {
      const data = await getAllOrders();
      setOrders(data);
    };

    loadOrders();
  }, []);

  return (
    <div>
      <h1>All Orders (Admin)</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h3>Order #{order.id}</h3>
            <p>User: {order.user?.name}</p>
            <p>Total: {order.total_price} MAD</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default OrdersList;
import UserLayout from "../../components/layouts/UserLayout";

import { useEffect, useState } from "react";

import { getOrders } from "../../services/orderService";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const loadOrders = async () => {

      const data = await getOrders();

      setOrders(data);
    };

    loadOrders();

  }, []);

  return (
    <UserLayout>

      <h1>Your Orders</h1>

      {orders.length === 0 ? (

        <p>No orders yet</p>

      ) : (

        orders.map((order) => (

          <div
            key={order.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >

            <h3>Order #{order.id}</h3>

            <p>Status: {order.status}</p>

            <p>Total: ${order.total_price}</p>

            {order.items?.map((item) => (

              <div key={item.id}>

                <p>
                  {item.product?.name} × {item.quantity}
                </p>

              </div>

            ))}

          </div>

        ))
      )}

    </UserLayout>
  );
}

export default Orders;
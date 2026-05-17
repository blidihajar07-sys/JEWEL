import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../../services/orderService";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await getOrders();

        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <p>Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-[#384152] mb-6">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-2xl p-6 border border-[#DCEAF4]">
          <p className="text-[#384152]/70">
            No orders yet
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl border border-[#DCEAF4] p-6 shadow-sm"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-[#384152]">
                    Order #{order.id}
                  </h3>

                  <p className="text-sm text-[#384152]/60">
                    Status: {order.status}
                  </p>
                </div>

                <p className="font-semibold text-[#D4B06A]">
                  {Number(order.total_price).toFixed(2)} MAD
                </p>
              </div>

              <div className="mt-4 space-y-2">
                {order.items?.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm"
                  >
                    <span>
                      {item.product?.name}
                    </span>

                    <span>
                      x{item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to={`/orders/${order.id}`}
                className="inline-block mt-4 text-sm text-[#D4B06A]"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
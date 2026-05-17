import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrders } from "../../services/orderService";

function OrderDetails() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const loadOrder = async () => {
      const orders = await getOrders();

      const foundOrder = orders.find(
        (o) => o.id === Number(id)
      );

      setOrder(foundOrder);
    };

    loadOrder();
  }, [id]);

  if (!order) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">

      <div className="bg-white rounded-2xl border border-[#DCEAF4] p-6 shadow-sm">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#384152]">
              Order #{order.id}
            </h1>

            <p className="text-sm text-[#384152]/60 mt-1">
              Status: {order.status}
            </p>
          </div>

          <p className="text-xl font-semibold text-[#D4B06A]">
            {order.total_price} MAD
          </p>
        </div>

        <div className="mt-6 space-y-3">

          {order.items?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b pb-2"
            >
              <div>
                <p className="font-medium">
                  {item.product?.name}
                </p>

                <p className="text-sm text-[#384152]/60">
                  Quantity: {item.quantity}
                </p>
              </div>

              <p>
                {item.subtotal} MAD
              </p>
            </div>
          ))}

        </div>

        <div className="mt-6 border-t pt-4 space-y-2 text-sm">

          <p>
            <span className="font-semibold">
              Shipping Address:
            </span>{" "}
            {order.shipping_address}
          </p>

          <p>
            <span className="font-semibold">
              Phone:
            </span>{" "}
            {order.phone}
          </p>

          <p>
            <span className="font-semibold">
              Payment:
            </span>{" "}
            {order.payment_method}
          </p>

        </div>

      </div>

    </div>
  );
}

export default OrderDetails;
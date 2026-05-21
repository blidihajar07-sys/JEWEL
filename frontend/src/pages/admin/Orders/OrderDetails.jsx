import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  getAllOrders,
  updateOrderStatus
} from "../../../services/orderService";

function OrderDetails() {

  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {

    const loadOrder = async () => {

      const data = await getAllOrders();

      const foundOrder = data.find(
        (o) => o.id === Number(id)
      );

      setOrder(foundOrder);
    };

    loadOrder();

  }, [id]);

  const handleStatusChange = async (status) => {

    await updateOrderStatus(order.id, status);

    setOrder({
      ...order,
      status
    });
  };

  if (!order) {
    return (
      <div className="p-10">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-[#384152]">
            Order #{order.id}
          </h1>

          <p className="text-[#384152]/60 mt-2">
            Detailed customer order
          </p>

        </div>

        {/* STATUS */}
        <div>

          <select
            value={order.status}
            onChange={(e) =>
              handleStatusChange(e.target.value)
            }
            className="border border-[#EFE3C8] rounded-2xl px-5 py-3 outline-none focus:border-[#D4B06A]"
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

        </div>

      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* PRODUCTS */}
          <div className="bg-white border border-[#EFE3C8] rounded-3xl p-6">

            <h2 className="text-2xl font-semibold text-[#384152] mb-6">
              Ordered Products
            </h2>

            <div className="space-y-5">

              {order.items?.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center justify-between border border-[#F5EFE2] rounded-2xl p-4"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#FAF7F2]">

                      <img
                        src={`/images/${item.product?.image}`}
                        alt={item.product?.name}
                        className="w-full h-full object-cover"
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold text-[#384152]">
                        {item.product?.name}
                      </h3>

                      <p className="text-sm text-[#384152]/60 mt-1">
                        Quantity: {item.quantity}
                      </p>

                      <p className="text-sm text-[#384152]/60">
                        Unit Price:
                        {" "}
                        {Number(item.price).toFixed(2)} MAD
                      </p>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="font-bold text-[#D4B06A] text-lg">
                      {Number(item.subtotal).toFixed(2)} MAD
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* CUSTOMER */}
          <div className="bg-white border border-[#EFE3C8] rounded-3xl p-6">

            <h2 className="text-xl font-semibold text-[#384152] mb-5">
              Customer
            </h2>

            <div className="space-y-4 text-[#384152]/70">

              <div>
                <p className="text-sm text-[#384152]/50">
                  Name
                </p>

                <p className="font-medium">
                  {order.user?.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#384152]/50">
                  Email
                </p>

                <p className="font-medium">
                  {order.user?.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#384152]/50">
                  Phone
                </p>

                <p className="font-medium">
                  {order.phone}
                </p>
              </div>

            </div>

          </div>

          {/* SHIPPING */}
          <div className="bg-white border border-[#EFE3C8] rounded-3xl p-6">

            <h2 className="text-xl font-semibold text-[#384152] mb-5">
              Shipping
            </h2>

            <p className="text-[#384152]/70 leading-relaxed">
              {order.shipping_address}
            </p>

          </div>

          {/* PAYMENT */}
          <div className="bg-white border border-[#EFE3C8] rounded-3xl p-6">

            <h2 className="text-xl font-semibold text-[#384152] mb-5">
              Payment
            </h2>

            <p className="text-[#384152]/70">
              {order.payment_method}
            </p>

          </div>

          {/* TOTAL */}
          <div className="bg-[#D4B06A] rounded-3xl p-6 text-white">

            <p className="text-sm opacity-80">
              Total Amount
            </p>

            <h3 className="text-4xl font-bold mt-2">
              {Number(order.total_price).toFixed(2)} MAD
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}

export default OrderDetails;
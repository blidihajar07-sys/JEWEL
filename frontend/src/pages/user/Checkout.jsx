import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../services/orderService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Checkout() {
  const { cart, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    shipping_address: "",
    phone: "",
    payment_method: "Cash on Delivery",
    card_holder_name: "",
    card_number: "",
    expiry_month: "",
    expiry_year: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const placeOrder = async () => {
  if (!user) {
    navigate("/login");
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  if (!formData.shipping_address || !formData.phone) {
    alert("Please fill all fields");
    return;
  }
// CARD VALIDATION
if (formData.payment_method === "Card") {

  if (
    !formData.card_holder_name ||
    !formData.card_number ||
    !formData.expiry_month ||
    !formData.expiry_year
  ) {
    alert("Please complete card information");
    return;
  }

  const month = Number(formData.expiry_month);

  let year = Number(formData.expiry_year);

  // convert 26 -> 2026
  if (year < 100) {
    year += 2000;
  }

  // invalid month
  if (month < 1 || month > 12) {
    alert("Invalid expiry month");
    return;
  }

  const currentDate = new Date();

  const currentMonth =
    currentDate.getMonth() + 1;

  const currentYear =
    currentDate.getFullYear();

  // expired card
  if (
    year < currentYear ||
    (year === currentYear &&
      month < currentMonth)
  ) {
    alert("This card is expired");
    return;
  }

  // basic card number validation
  if (formData.card_number.length < 12) {
    alert("Invalid card number");
    return;
  }
}

  try {
    const orderData = {
      items: cart,
      total_price: total,
      shipping_address: formData.shipping_address,
      phone: formData.phone,
      payment_method: formData.payment_method,

       card_holder_name: formData.card_holder_name,
       card_number: formData.card_number,
       expiry_month: formData.expiry_month,
       expiry_year: formData.expiry_year,
    };

    const response = await createOrder(orderData);

    if (!response || response.message !== "Order created") {
      alert(response.message || "Order failed");
      return;
    }

    clearCart();
    alert("Order placed successfully");
    navigate("/orders");

  } catch (error) {
    console.error(error);
    alert("Failed to place order");
  }
};

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#384152]">
        Checkout
      </h1>

      {/* ORDER ITEMS */}
      <div className="mt-6 bg-white rounded-2xl border border-[#DCEAF4] p-6">
        <h2 className="text-xl font-semibold mb-4">
          Order Summary
        </h2>

        <div className="space-y-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between"
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                {(item.price * item.quantity).toFixed(2)} MAD
              </span>
            </div>
          ))}
        </div>

        <h3 className="mt-6 text-lg font-bold text-[#D4B06A]">
          Total: {total.toFixed(2)} MAD
        </h3>
      </div>

      {/* SHIPPING */}
      <div className="mt-6 bg-white rounded-2xl border border-[#DCEAF4] p-6">
        <h2 className="text-xl font-semibold mb-4">
          Shipping Information
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            name="shipping_address"
            placeholder="Shipping address"
            value={formData.shipping_address}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <select
            name="payment_method"
            value={formData.payment_method}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="Cash">
              Cash on delivery
            </option>

            <option value="Card">
              Credit card
            </option>
          </select>

          {formData.payment_method === "Card" && (
            <div className="space-y-3 mt-4">
              
              <input
               type="text"
                name="card_holder_name"
                placeholder="Card holder name"
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="text"
                name="card_number"
                placeholder="Card number"
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
              
              <div className="flex gap-3">
              <input
                type="text"
                name="expiry_month"
                placeholder="MM"
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
              <input
                type="text"
                name="expiry_year"
                placeholder="YY"
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>
            
          </div>
)}

        </div>
      </div>

      <button
        onClick={placeOrder}
        className="mt-6 w-full bg-[#D4B06A] text-white py-3 rounded-2xl hover:opacity-90"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
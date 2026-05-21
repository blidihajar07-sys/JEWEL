import { useCart } from "../../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";

function Cart() {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      navigate("/login", { state: { from: "/checkout" } });
      return;
    }

    navigate("/checkout");
  };

  const handleDecrease = (item) => {
    if (item.quantity <= 1) return;
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <ShoppingBag size={40} className="text-[#D4B06A]" />

        <h2 className="text-2xl font-semibold mt-4 text-[#384152]">
          Your cart is empty
        </h2>

        <p className="text-[#384152]/60 mt-2">
          Add some beautiful pieces to your collection ✨
        </p>

        <Link
          to="/products"
          className="mt-6 px-6 py-3 bg-[#D4B06A] text-white rounded-xl hover:opacity-90"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-[#384152] mb-6">
        Your Cart
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* ITEMS */}
        <div className="md:col-span-2 space-y-4">

          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#DCEAF4] rounded-2xl p-4 flex justify-between items-center"
            >
              {/* LEFT */}
              <div>
                <h3 className="font-semibold text-[#384152]">
                  {item.name}
                </h3>

                <p className="text-sm text-[#384152]/60 mt-1">
                  {Number(item.price).toFixed(2)} MAD
                </p>
              </div>

              {/* QUANTITY CONTROLS */}
              <div className="flex items-center gap-3">

                <button
                  onClick={() => handleDecrease(item)}
                  className="p-2 rounded-lg border hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>

                <span className="min-w-[20px] text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => handleIncrease(item)}
                  className="p-2 rounded-lg border hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>

              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}

        </div>

        {/* SUMMARY */}
        <div className="bg-white border border-[#DCEAF4] rounded-2xl p-6 h-fit">

          <h2 className="text-xl font-semibold text-[#384152] mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between text-[#384152]/70 mb-2">
            <span>Subtotal</span>
            <span>{total.toFixed(2)} MAD</span>
          </div>

          <div className="flex justify-between text-[#384152]/70 mb-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-bold text-[#384152]">
            <span>Total</span>
            <span className="text-[#D4B06A]">
              {total.toFixed(2)} MAD
            </span>
          </div>

          {/* ACTIONS */}
          <button
            onClick={handleCheckout}
            className="w-full mt-6 bg-[#D4B06A] text-white py-3 rounded-xl hover:opacity-90"
          >
            Checkout
          </button>

          <button
            onClick={clearCart}
            className="w-full mt-3 border border-red-400 text-red-500 py-2 rounded-xl hover:bg-red-50"
          >
            Clear Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default Cart;
import { useCart } from "../../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, total, clearCart  } = useCart();
  const { user } = useAuth();
const navigate = useNavigate();

const handleCheckout = () => {
  if (!user) {
    navigate("/login", { state: { from: "/checkout" } });
    return;
  }

  navigate("/checkout");
};
if (cart.length === 0) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl">Your cart is empty</h2>
      <Link to="/products" className="text-[#D4B06A]">
        Go shopping
      </Link>
    </div>
  );}

  return (
    <div>
      <h1>Cart</h1>

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <h3>{item.name}</h3>

          <p>{Number(item.price).toFixed(2)} MAD</p>

          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              updateQuantity(item.id, Number(e.target.value))
            }
          />

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: {total.toFixed(2)} MAD</h2>

      <button
        onClick={handleCheckout}
        className="bg-[#D4B06A] text-white px-4 py-2 rounded-xl"
      >
        Go to Checkout
      </button>

      <br></br>
      <br></br>

      <button onClick={clearCart}>Clear Cart</button>

    </div>
  );
}

export default Cart;
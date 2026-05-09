import UserLayout from "../../components/layouts/UserLayout";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, updateQuantity, total, clearCart  } = useCart();

  return (
    <UserLayout>
      <h1>Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <h3>{item.name}</h3>

          <p>${item.price}</p>

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

      <h2>Total: ${total.toFixed(2)}</h2>

      <Link to="/checkout">
        Go to Checkout
      </Link>

      <br></br>
      <br></br>

      <button onClick={clearCart}>Clear Cart</button>

    </UserLayout>
  );
}

export default Cart;
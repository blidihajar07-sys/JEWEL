import UserLayout from "../../components/layouts/UserLayout";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../services/orderService";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  
  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }
    
    const orderData = {
      items: cart,
      total_price: total,
      shipping_address: "Casablanca",
      phone: "0600000000",
      payment_method: "Cash",
    };
    
    console.log(orderData);
    
    const response = await createOrder(orderData);
    
    console.log(response);
    
    alert("Order placed");
    
    clearCart();
    
    navigate("/orders");
  };

  return (
    <UserLayout>
      <h1>Checkout</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name} x {item.quantity}</p>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <button onClick={placeOrder}>
        Place Order
      </button>
    </UserLayout>
  );
}

export default Checkout;
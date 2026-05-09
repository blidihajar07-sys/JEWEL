import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px" }}>
      <img src={`/images/${product.image}`} style={{ width: "100px" }} />

      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <Link to={`/products/${product.id}`}>
        View Details
      </Link>

      <br />

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
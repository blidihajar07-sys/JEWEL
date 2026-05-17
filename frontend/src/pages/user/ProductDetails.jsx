import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../../services/productService";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) {
    return <p className="p-6">Loading...</p>;
  }

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login", {
        state: { from: `/products/${id}` }
      });
      return;
    }

    if (product.stock <= 0) {
      alert("Out of stock");
      return;
    }

    addToCart(product);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">

      <div className="rounded-3xl overflow-hidden border border-[#DCEAF4] bg-white">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
          className="w-full h-[500px] object-cover"
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-[#384152]">
          {product.name}
        </h1>

        <p className="mt-4 text-[#384152]/70 leading-relaxed">
          {product.description}
        </p>

        <h3 className="mt-6 text-3xl font-semibold text-[#D4B06A]">
          {Number(product.price).toFixed(2)} MAD
        </h3>

        <button
          onClick={handleAddToCart}
          disabled={product.stock <= 0}
          className={`mt-8 px-8 py-3 rounded-2xl text-white ${
            product.stock <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#D4B06A]"
          }`}
        >
          {product.stock <= 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>

    </div>
  );
}

export default ProductDetails;
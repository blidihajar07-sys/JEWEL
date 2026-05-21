import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";

import {
  ShoppingCart,
  ArrowLeft,
} from "lucide-react";

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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#384152]/60 text-lg">
          Loading product...
        </p>
      </div>
    );
  }

  const handleAddToCart = () => {

    if (!user) {

      alert("Please login to add products to cart.");

      navigate("/login", {
        state: { from: `/products/${id}` }
      });

      return;
    }

    if (user.role === "admin") {
      return;
    }

    if (product.stock <= 0) {
      alert("Out of stock");
      return;
    }

    addToCart(product);

    alert("Product added to cart");
  };

  return (

    <div className="min-h-screen bg-[#FAF7F2] py-14 px-6">

      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-[#384152]/70 hover:text-[#D4B06A] transition mb-8"
        >
          <ArrowLeft size={18} />
          Back to products
        </Link>

        {/* CARD */}
        <div className="grid lg:grid-cols-2 gap-12 bg-white border border-[#EFE3C8] rounded-[2rem] p-6 md:p-10 shadow-sm">

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden border border-[#DCEAF4] bg-white">
            <img
              src={`/images/${product.image}`}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">

            {/* CATEGORY */}
            <span className="w-fit px-4 py-2 rounded-full bg-[#F3E7CF] text-[#B89146] text-sm capitalize">
              {product.category}
            </span>

            {/* TITLE */}
            <h1 className="mt-5 text-4xl md:text-5xl font-bold text-[#384152] leading-tight">
              {product.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[#384152]/70 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* PRICE */}
            <div className="mt-8 flex items-center gap-4">

              <h3 className="text-4xl font-bold text-[#D4B06A]">
                {Number(product.price).toFixed(2)} MAD
              </h3>

              <span
                className={`px-4 py-2 rounded-full text-sm ${
                  product.stock > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </span>

            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button
                onClick={handleAddToCart}
                disabled={
                  product.stock <= 0 ||
                  user?.role === "admin"
                }
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-white transition duration-300 ${
                  product.stock <= 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : user?.role === "admin"
                    ? "bg-[#384152] cursor-not-allowed"
                    : "bg-[#D4B06A] hover:scale-105 hover:shadow-lg"
                }`}
              >

                <ShoppingCart size={20} />

                {user?.role === "admin"
                  ? "Admin Mode"
                  : product.stock <= 0
                  ? "Out of Stock"
                  : "Add to Cart"}

              </button>

              <Link
                to="/products"
                className="px-8 py-4 rounded-2xl border border-[#D4B06A] text-[#D4B06A] hover:bg-[#D4B06A]/10 transition"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;
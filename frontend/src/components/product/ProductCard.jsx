import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

import {
  ShoppingCart,
  ShieldCheck,
  Eye,
} from "lucide-react";

function ProductCard({ product }) {

  const navigate = useNavigate();

  const { user } = useAuth();

  const { addToCart } = useCart();

  const handleAddToCart = () => {

    // guest
    if (!user) {

      alert("Please login to add products to cart.");

      navigate("/login", {
        state: {
          from: `/products/${product.id}`,
        },
      });

      return;
    }

    // admin restriction
    if (user.role === "admin") {
      return;
    }

    // stock
    if (product.stock <= 0) {

      alert("This product is out of stock.");

      return;
    }

    addToCart(product);
    
    alert("Product added to cart");  };

  return (

    <div className="
      group
      bg-white
      border
      border-[#DCEAF4]
      rounded-3xl
      overflow-hidden
      hover:shadow-2xl
      transition
      duration-300
    ">

      {/* IMAGE */}
      <Link to={`/products/${product.id}`}>

        <div className="max-h-full object-contain group-hover:scale-105 transition duration-500">

          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-105
              transition
              duration-500
            "
          />

        </div>

      </Link>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-5">

        <div className="flex items-center justify-between">

          <h3 className="font-semibold text-lg text-[#384152]">
            {product.name}
          </h3>

          <span className="
            text-xs
            capitalize
            bg-[#FAF7F2]
            px-3
            py-1
            rounded-full
            text-[#384152]/60
          ">
            {product.category}
          </span>

        </div>

        <p className="mt-3 text-[#384152]/70">
          {Number(product.price).toFixed(2)} MAD
        </p>

        {/* ACTIONS */}
        <div className="flex items-center justify-between mt-5">

          <Link
            to={`/products/${product.id}`}
            className="
              flex
              items-center
              gap-2
              text-[#D4B06A]
              hover:translate-x-1
              transition
            "
          >
            <Eye size={18} />
            Details
          </Link>

          {/* ADMIN */}
          {user?.role === "admin" ? (

            <button
              disabled
              className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-2xl
                bg-[#384152]
                text-white
                cursor-not-allowed
              "
            >
              <ShieldCheck size={16} />
              Admin
            </button>

          ) : (

            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className={`
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-2xl
                text-white
                transition
                ${
                  product.stock <= 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#D4B06A] hover:scale-105"
                }
              `}
            >

              <ShoppingCart size={16} />

              {product.stock <= 0
                ? "Out"
                : "Add"}

            </button>

          )}

        </div>

      </div>

    </div>
  );
}

export default ProductCard;
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

import { ShoppingCart } from "lucide-react";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const { addToCart } = useCart();
  const handleAddToCart = () => {
    if (!user) {
      alert("Please login first");

      navigate("/login", {
        state: { from: "/products" }
      });
      return;
    }

    addToCart(product);
  };

  return (
    //1 golden
    // <div className="bg-white rounded-2xl shadow-sm border p-4 hover:shadow-md transition">
    //   <img 
    //      src={`/images/${product.image}`} 
    //       className="h-48 w-full object-cover rounded-xl" />

    //   <h3  className="mt-3 font-semibold text-[#384152]">{product.name}</h3>
    //   <p className="text-sm text-gray-500 mt-1">${product.price}</p>

    //   <Link to={`/products/${product.id}`}>
    //     View Details
    //   </Link>

    //   <br />

    //   <button onClick={() => addToCart(product)} className="mt-4 w-full flex items-center justify-center gap-2 bg-[#D4B06A] text-white py-2 rounded-xl hover:opacity-90">
    //     <ShoppingCart size={18} />
    //     Add to Cart
    //   </button>
    // </div>

    //2 gradient
    // <div className="rounded-2xl border bg-gradient-to-br from-[#DCEAF4] via-[#F3DDE5] to-[#FAF7F2] p-4 shadow-sm hover:shadow-md transition">
    //   <img 
    //      src={`/images/${product.image}`} 
    //      className="h-48 w-full object-cover rounded-xl border border-white"
    //   />
      
    //   <h3 className="mt-3 font-semibold text-[#384152]">
    //     {product.name}
    //   </h3>
      
    //   <p className="text-sm text-[#384152]/70 mt-1">
    //     ${product.price}
    //   </p>
      
    //   <div className="flex gap-2 mt-3">
    //     <Link className="text-sm text-[#384152] underline" to={`/products/${product.id}`}>
    //       View Details
    //     </Link>
    //   </div>
      
    //   <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#D4B06A] text-white py-2 rounded-xl hover:opacity-90">
    //     Add to Cart
    //   </button>
    // </div>



    //3 split
    // <div className="rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition bg-white">
    //   <div className="bg-[#DCEAF4] p-3">
    //     <img 
    //       src={`/images/${product.image}`}
    //       className="h-44 w-full object-cover rounded-xl"
    //     />
    //   </div>
      
    //   <div className="p-4 bg-[#F3DDE5]">
    //     <h3 className="font-semibold text-[#384152]">
    //       {product.name}
    //     </h3>
        
    //     <p className="text-sm text-[#384152]/70 mt-1">
    //       ${product.price}
    //     </p>
        
    //     <div className="flex justify-between items-center mt-3">
    //       <Link 
    //         to={`/products/${product.id}`}
    //         className="text-sm text-[#384152] underline">
    //           Details
    //       </Link>
          
    //       <button 
    //         onClick={() => addToCart(product)}
    //         className="bg-[#D4B06A] text-white px-3 py-1 rounded-lg text-sm">
    //           Add
    //       </button>
    //     </div>
    //   </div>
    // </div>

    // 4 glass..
    // <div className="rounded-2xl p-4 backdrop-blur-md bg-white/40 border border-[#DCEAF4] shadow-sm hover:shadow-lg transition">
    //   <div className="bg-[#FAF7F2] rounded-xl p-2">
    //     <img 
    //       src={`/images/${product.image}`}
    //       className="h-48 w-full object-cover rounded-xl"
    //     />
    //   </div>
      
    //     <h3 className="mt-3 font-semibold text-[#384152]">
    //       {product.name}
    //     </h3>
        
    //     <p className="text-sm text-[#384152]/70">
    //       ${product.price}
    //     </p>
        
    //     <div className="flex gap-2 mt-3">
    //       <Link 
    //         to={`/products/${product.id}`}
    //         className="text-sm text-[#384152]">
    //           View
    //       </Link>
    //     </div>  

    //       <button 
    //         onClick={() => addToCart(product)}
    //         className="mt-4 w-full bg-[#F3DDE5] text-[#384152] py-2 rounded-xl hover:bg-[#DCEAF4] transition">
    //           Add to cart
    //       </button>
        
    // </div>


    //5
    <div className="rounded-2xl border-2 border-[#D4B06A] bg-[#FAF7F2] p-4 shadow-sm hover:shadow-md transition">
      <div className="rounded-xl overflow-hidden h-64 flex items-center justify-center p-4">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
          className="max-h-full object-contain transition duration-300 hover:scale-105"
        />
      </div>
      
        <h3 className="mt-3 font-semibold text-[#384152]">
          {product.name}
        </h3>
        
        <p className="text-sm text-[#384152]/70">
          {Number(product.price).toFixed(2)} MAD
        </p>
        
        <div className="flex gap-2 mt-3">
          <Link 
            to={`/products/${product.id}`}
            className="text-sm text-[#384152] hover:text-[#D4B06A]">
              View Details
          </Link>
        </div>
          
        <button disabled={user?.role === "admin"}>
          {user?.role === "admin"
            ? "Admin Preview"
            : "Add to Cart"}
          </button>

        
    </div>
  );
}

export default ProductCard;
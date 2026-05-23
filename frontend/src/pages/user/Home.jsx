import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import axios from "axios";

import ProductCard from "../../components/product/ProductCard";

import {
  categories,
  filterByCategory,
  searchProducts,
} from "../../utils/productUtils";

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/products");

        setProducts(
          [...res.data]
          .sort(() => 0.5 - Math.random())
          .slice(0, 6)
        );

      } catch (err) {
        console.error(err);
      }
    };

    loadProducts();
  }, []);

  const categoryFiltered = filterByCategory(
  products,
  selectedCategory
);

const filteredProducts = searchProducts(
  categoryFiltered,
  searchTerm
);
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center px-6">

        {/* animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCEAF4] via-[#F3DDE5] to-[#FAF7F2]" />

        {/* glow effects */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#D4B06A]/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F3DDE5]/40 rounded-full blur-3xl animate-pulse" />

        {/* floating jewelry circles */}
        <div className="absolute top-32 left-20 hidden lg:block w-24 h-24 rounded-full border border-[#D4B06A]/30 animate-bounce" />

        <div className="absolute bottom-32 right-24 hidden lg:block w-16 h-16 rounded-full border border-[#384152]/20 animate-bounce delay-300" />

        {/* content */}
        <div className="relative max-w-4xl text-center z-10">

          <p className="text-sm uppercase tracking-[0.3em] text-[#384152]/60">
            Serene Spark Collection
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold text-[#384152] leading-tight">

            Jewelry that feels

            <span className="block text-[#D4B06A]">
              effortless
            </span>

          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#384152]/70 max-w-2xl mx-auto leading-relaxed">
            Minimal and timeless jewelry crafted to elevate your natural elegance with softness and confidence.
          </p>

          {/* buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <Link to="/products">
              <button className="px-8 py-4 bg-[#D4B06A] text-white rounded-2xl hover:scale-105 hover:shadow-xl transition duration-300">
                Explore Pieces
              </button>
            </Link>

          </div>


        </div>
      </section>

{/* SEARCH + FILTER SECTION */}
<section className="max-w-6xl mx-auto px-6">

  {/* SEARCH BAR CARD */}
  <div className="bg-white/90 backdrop-blur-xl border border-[#EFE3C8] shadow-2xl rounded-[2rem] p-4 md:p-5">

    <div className="flex flex-col lg:flex-row gap-5 items-center">

      {/* SEARCH */}
      <div className="relative flex-1 w-full">

        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#384152]/40"
        />

        <input
          type="text"
          placeholder="Search rings, necklaces, bracelets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            w-full
            bg-[#FAF7F2]
            border border-transparent
            focus:border-[#D4B06A]
            rounded-2xl
            pl-14
            pr-5
            py-4
            outline-none
            text-[#384152]
            placeholder:text-[#384152]/40
            transition
          "
        />

      </div>


    </div>
  </div>  
  </section>    

    {/* CATEGORY BUTTONS */}
    <div className="flex flex-wrap justify-center gap-3 mt-5">

      {/* ALL */}
      <button
        onClick={() => setSelectedCategory("all")}
        className={`px-5 py-2 rounded-full border transition capitalize ${
          selectedCategory === "all"
            ? "bg-[#D4B06A] text-white border-[#D4B06A]"
            : "border-[#D4B06A] text-[#D4B06A] hover:bg-[#D4B06A]/10"
        }`}
      >
        All
      </button>

      {/* CATEGORIES */}
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-5 py-2 rounded-full border transition capitalize ${
            selectedCategory === cat
              ? "bg-[#D4B06A] text-white border-[#D4B06A]"
              : "border-[#D4B06A] text-[#D4B06A] hover:bg-[#D4B06A]/10"
          }`}
        >
          {cat}
        </button>
      ))}

    </div>

      
      {/* PRODUCTS */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-3xl font-bold text-[#384152]">
              Featured Pieces
            </h2>

            <p className="text-[#384152]/60 mt-2">
              Discover our curated elegant collection
            </p>
          </div>

          <Link
            to="/products"
            className="text-[#D4B06A] hover:underline"
          >
            View all
          </Link>

        </div>


        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
            />
          ))}

        </div>

        {/* EMPTY */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">

            <h3 className="text-2xl font-semibold text-[#384152]">
              No products found
            </h3>

            <p className="text-[#384152]/60 mt-2">
              Try another category
            </p>

          </div>
        )}

      </section>

      {/* BRAND SECTION */}
      <section className="bg-white border-t border-[#DCEAF4] py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold text-[#384152]">
            Crafted with intention
          </h2>

          <p className="mt-5 text-[#384152]/60 leading-relaxed">
            Every piece is thoughtfully designed to balance elegance,
            softness, and timeless sophistication.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Home;
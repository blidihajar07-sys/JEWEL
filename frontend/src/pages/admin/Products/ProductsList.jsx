import { useEffect, useState } from "react";

import {
  getProducts,
  deleteProduct,
} from "../../../services/productService";

import { Link } from "react-router-dom";

import {
  Pencil,
  Trash2,
  Plus,
  Search,
} from "lucide-react";

import { categories } from "../../../utils/productUtils";

function ProductsList() {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [stockFilter, setStockFilter] =
    useState("all");

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      "Delete this product?"
    );

    if (!confirmed) return;

    await deleteProduct(id);

    loadProducts();
  };

  // FILTERING
  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all"
        ? true
        : product.category?.toLowerCase() ===
          selectedCategory.toLowerCase();

    const matchesStock =
      stockFilter === "all"
        ? true
        : stockFilter === "inStock"
        ? product.stock > 0
        : product.stock === 0;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStock
    );
  });

  return (
    <div>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-[#384152]">
            Products
          </h1>

          <p className="text-[#384152]/60 mt-2">
            Manage your jewelry catalog
          </p>
        </div>

        <Link
          to="/admin/products/add"
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#D4B06A] text-white w-fit"
        >
          <Plus size={18} />
          Add Product
        </Link>

      </div>

      {/* SEARCH + FILTERS */}
      <div className="bg-white border border-[#EFE3C8] rounded-3xl p-5 mb-8">

        {/* SEARCH */}
        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#384152]/50"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#FAF7F2] border border-[#EFE3C8] rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-[#D4B06A]"
          />

        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mt-5">

          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === "all"
                ? "bg-[#D4B06A] text-white border-[#D4B06A]"
                : "border-[#D4B06A] text-[#D4B06A]"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border capitalize ${
                selectedCategory === cat
                  ? "bg-[#D4B06A] text-white border-[#D4B06A]"
                  : "border-[#D4B06A] text-[#D4B06A]"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* STOCK FILTER */}
        <div className="flex gap-3 mt-5">

          <button
            onClick={() => setStockFilter("all")}
            className={`px-4 py-2 rounded-full border ${
              stockFilter === "all"
                ? "bg-[#384152] text-white"
                : "border-[#384152] text-[#384152]"
            }`}
          >
            All Stock
          </button>

          <button
            onClick={() => setStockFilter("inStock")}
            className={`px-4 py-2 rounded-full border ${
              stockFilter === "inStock"
                ? "bg-green-600 text-white"
                : "border-green-600 text-green-600"
            }`}
          >
            In Stock
          </button>

          <button
            onClick={() => setStockFilter("out")}
            className={`px-4 py-2 rounded-full border ${
              stockFilter === "out"
                ? "bg-red-500 text-white"
                : "border-red-500 text-red-500"
            }`}
          >
            Out of Stock
          </button>

        </div>

      </div>

{/* PRODUCTS GRID */}
<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

  {filteredProducts.map((product) => (

    <div
      key={product.id}
      className="
        group
        bg-white
        border
        border-[#DCEAF4]
        rounded-3xl
        overflow-hidden
        hover:shadow-2xl
        transition
        duration-300
      "
    >

      {/* IMAGE */}
      <div className="bg-[#F8F8F8] h-72 overflow-hidden">

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

      {/* CONTENT */}
      <div className="p-6">

        <div className="flex items-start justify-between gap-4">

          <div>
            <h2 className="text-xl font-semibold text-[#384152]">
              {product.name}
            </h2>

            <p className="text-sm text-[#384152]/60 mt-1 capitalize">
              {product.category}
            </p>
          </div>

          <span className="bg-[#F3E7CF] text-[#B89146] px-3 py-1 rounded-full text-sm font-medium">
            {product.stock} in stock
          </span>

        </div>

        <p className="mt-4 text-2xl font-bold text-[#D4B06A]">
          {Number(product.price).toFixed(2)} MAD
        </p>

        {/* ACTIONS */}
        <div className="flex gap-3 mt-6">

          <Link
            to={`/admin/products/edit/${product.id}`}
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              py-3
              rounded-2xl
              border
              border-[#D4B06A]
              text-[#D4B06A]
              hover:bg-[#D4B06A]/10
              transition
            "
          >
            <Pencil size={18} />
            Edit
          </Link>

          <button
            onClick={() => handleDelete(product.id)}
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              py-3
              rounded-2xl
              bg-red-500
              text-white
              hover:bg-red-600
              transition
            "
          >
            <Trash2 size={18} />
            Delete
          </button>

        </div>

      </div>

    </div>

  ))}

</div>
      {/* EMPTY */}
      {filteredProducts.length === 0 && (
        <div className="bg-white border border-[#EFE3C8] rounded-3xl p-10 text-center mt-6">

          <p className="text-[#384152]/60">
            No products found.
          </p>

        </div>
      )}

    </div>
  );
}

export default ProductsList;
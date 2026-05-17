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

function ProductsList() {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

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

      {/* SEARCH */}
      <div className="relative mb-8">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#384152]/50"
        />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-[#EFE3C8] rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-[#D4B06A]"
        />

      </div>

      {/* PRODUCTS GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            className="bg-white border border-[#EFE3C8] rounded-3xl overflow-hidden shadow-sm"
          >

            {/* IMAGE */}
            <div className="h-64 bg-[#FAF7F2] flex items-center justify-center p-6">

              <img
                src={`/images/${product.image}`}
                alt={product.name}
                className="max-h-full object-contain"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <h2 className="text-xl font-semibold text-[#384152]">
                    {product.name}
                  </h2>

                  <p className="text-sm text-[#384152]/60 mt-1">
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
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border border-[#D4B06A] text-[#D4B06A]"
                >
                  <Pencil size={18} />
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(product.id)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-red-500 text-white"
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
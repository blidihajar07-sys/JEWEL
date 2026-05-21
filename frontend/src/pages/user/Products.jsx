import { useEffect, useState } from "react";

import ProductCard from "../../components/product/ProductCard";

import { getProducts } from "../../services/productService";

import { Search } from "lucide-react";

import {
  categories,
  filterByCategory,
  searchProducts,
} from "../../utils/productUtils";

function Products() {

  const [products, setProducts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {

    const loadProducts = async () => {

      const data = await getProducts();

      setProducts(data);
    };

    loadProducts();

  }, []);

  // CATEGORY
  const categoryFiltered = filterByCategory(
    products,
    selectedCategory
  );

  // SEARCH
  const searchedProducts = searchProducts(
    categoryFiltered,
    searchTerm
  );

  // SORT
  const filteredProducts = [...searchedProducts].sort(
    (a, b) => {

      if (sortBy === "low-high") {
        return a.price - b.price;
      }

      if (sortBy === "high-low") {
        return b.price - a.price;
      }

      if (sortBy === "a-z") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    }
  );

  return (

    <div className="min-h-screen bg-[#FAF7F2] py-14 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-[#384152]">
            Our Collection
          </h1>

          <p className="mt-4 text-[#384152]/60 text-lg">
            Explore timeless jewelry crafted with elegance.
          </p>

        </div>

        {/* SEARCH */}
        <div className="bg-white border border-[#EFE3C8] rounded-[2rem] p-5 shadow-sm">

          <div className="relative">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#384152]/40"
            />

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="
                w-full
                bg-[#FAF7F2]
                rounded-2xl
                pl-14
                pr-5
                py-4
                outline-none
                border
                border-transparent
                focus:border-[#D4B06A]
              "
            />

          </div>

        </div>

        {/* FILTERS */}
        <div className="mt-6 flex flex-col lg:flex-row gap-5 items-center justify-between">

          {/* CATEGORIES */}
          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2 rounded-full border transition ${
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
                className={`px-5 py-2 rounded-full border capitalize transition ${
                  selectedCategory === cat
                    ? "bg-[#D4B06A] text-white border-[#D4B06A]"
                    : "border-[#D4B06A] text-[#D4B06A]"
                }`}
              >
                {cat}
              </button>

            ))}

          </div>

          {/* SORT */}
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="
              bg-white
              border
              border-[#EFE3C8]
              rounded-2xl
              px-5
              py-3
              outline-none
              focus:border-[#D4B06A]
            "
          >

            <option value="default">
              Sort by
            </option>

            <option value="low-high">
              Price: Low to High
            </option>

            <option value="high-low">
              Price: High to Low
            </option>

            <option value="a-z">
              A → Z
            </option>

          </select>

        </div>

        {/* PRODUCTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

        {/* EMPTY */}
        {filteredProducts.length === 0 && (

          <div className="text-center py-24">

            <h2 className="text-3xl font-semibold text-[#384152]">
              No products found
            </h2>

            <p className="mt-3 text-[#384152]/60">
              Try another search or category.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Products;
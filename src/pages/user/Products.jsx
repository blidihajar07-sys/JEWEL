import { useEffect, useState } from "react";
// import UserLayout from "../../components/layouts/UserLayout";
import ProductCard from "../../components/product/ProductCard";
import { getProducts } from "../../services/productService";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default Products;
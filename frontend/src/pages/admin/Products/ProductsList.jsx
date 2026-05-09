import AdminLayout from "../../../components/layouts/AdminLayout";
import { useEffect, useState } from "react";
import {
  getProducts,
  deleteProduct,
} from "../../../services/productService";

import { Link } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);

    loadProducts();
  };

  return (
    <AdminLayout>
      <h1>Products List</h1>

      <Link to="/admin/products/add">
        Add Product
      </Link>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{product.name}</h3>

          <p>${product.price}</p>

          <img
            src={`/images/${product.image}`}
            alt={product.name}
            width="100"
          />

          <br />

          <Link to={`/admin/products/edit/${product.id}`}>
            Edit
          </Link>

          {" "}

          <button
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </AdminLayout>
  );
}

export default ProductsList;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../../components/layouts/AdminLayout";

import { createProduct } from "../../../services/productService";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    material: "",
    carat: "",
    clarity: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createProduct(formData);

    alert("Product added");

    navigate("/admin/products");
  };

  return (
    <AdminLayout>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br />

        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <br />

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <br />

        <input
          name="stock"
          placeholder="Stock"
          onChange={handleChange}
        />

        <br />

        <input
          name="material"
          placeholder="Material"
          onChange={handleChange}
        />

        <br />

        <input
          name="carat"
          placeholder="Carat"
          onChange={handleChange}
        />

        <br />

        <input
          name="clarity"
          placeholder="Clarity"
          onChange={handleChange}
        />

        <br />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <br />

        <input
          name="image"
          placeholder="image.jpg"
          onChange={handleChange}
        />

        <br />

        <button type="submit">
          Add Product
        </button>

      </form>
    </AdminLayout>
  );
}

export default AddProduct;
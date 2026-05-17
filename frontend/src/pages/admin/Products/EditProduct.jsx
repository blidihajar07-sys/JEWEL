import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getProductById,
  updateProduct,
} from "../../../services/productService";

function EditProduct() {
  const { id } = useParams();

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

  // LOAD PRODUCT
  useEffect(() => {
    const loadProduct = async () => {
      const data = await getProductById(id);

      setFormData(data);
    };

    loadProduct();
  }, [id]);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE
  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(id, formData);

    alert("Product updated");

    navigate("/admin/products");
  };

  return (
    <div>
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <br />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
        />

        <br />

        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <br />

        <input
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Stock"
        />

        <br />

        <input
          name="material"
          value={formData.material}
          onChange={handleChange}
          placeholder="Material"
        />

        <br />

        <input
          name="carat"
          value={formData.carat || ""}
          onChange={handleChange}
          placeholder="Carat"
        />

        <br />

        <input
          name="clarity"
          value={formData.clarity || ""}
          onChange={handleChange}
          placeholder="Clarity"
        />

        <br />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <br />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="/images/image.jpg"
        />

        <br />

        <button type="submit">
          Save Changes
        </button>

      </form>
    </div>
  );
}

export default EditProduct;
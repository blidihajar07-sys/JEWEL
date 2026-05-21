import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getProductById,
  updateProduct,
} from "../../../services/productService";

function EditProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

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

  useEffect(() => {

    const loadProduct = async () => {

      const data = await getProductById(id);

      setFormData(data);

      setLoading(false);
    };

    loadProduct();

  }, [id]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  if (
    !formData.name ||
    !formData.category ||
    !formData.price ||
    !formData.stock ||
    !formData.material
  ) {
    alert("Please fill all required fields");
    return;
  }

  await updateProduct(id, formData);

  alert("Product updated successfully");

  navigate("/admin/products");

};

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-5xl">

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold text-[#384152]">
          Edit Product
        </h1>

        <p className="text-[#384152]/60 mt-2">
          Update jewelry product information
        </p>

      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-[#EFE3C8] rounded-3xl p-8 shadow-sm"
      >

        <div className="grid md:grid-cols-2 gap-6">

          {/* NAME */}
          <div>

            <label className="block mb-2 text-sm font-medium text-[#384152]">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            />

          </div>

          {/* CATEGORY */}
          <div>

            <select
             name="category"
             value={formData.category}
             onChange={handleChange}
             className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            >
              <option value="">Select category</option>
              
              <option value="ring">Ring</option>
              <option value="necklace">Necklace</option>
              <option value="bracelet">Bracelet</option>
              <option value="earrings">Earrings</option>
            </select>

          </div>

          {/* PRICE */}
          <div>

            <label className="block mb-2 text-sm font-medium text-[#384152]">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            />

          </div>

          {/* STOCK */}
          <div>

            <label className="block mb-2 text-sm font-medium text-[#384152]">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            />

          </div>

          {/* MATERIAL */}
          <div>

            <label className="block mb-2 text-sm font-medium text-[#384152]">
              Material
            </label>

            <select
             name="material"
             value={formData.material || ""}
             onChange={handleChange}
             className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            >
             <option value="">Select material</option>
             <option value="gold">Gold</option>
             <option value="silver">Silver</option>
             <option value="platinum">Platinum</option>
            </select>

          </div>

          {/* CARAT */}
          <div>

            <label className="block mb-2 text-sm font-medium text-[#384152]">
              Carat
            </label>

            <input
              type="text"
              name="carat"
              value={formData.carat || ""}
              onChange={handleChange}
              className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            />

          </div>

          {/* CLARITY */}
          <div>

            <label className="block mb-2 text-sm font-medium text-[#384152]">
              Clarity
            </label>

            <input
              type="text"
              name="clarity"
              value={formData.clarity || ""}
              onChange={handleChange}
              className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            />

          </div>

          {/* IMAGE */}
          <div>

            <label className="block mb-2 text-sm font-medium text-[#384152]">
              Image Filename
            </label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            />

          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="mt-6">

          <label className="block mb-2 text-sm font-medium text-[#384152]">
            Description
          </label>

          <textarea
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 resize-none outline-none focus:border-[#D4B06A]"
          />

        </div>

        {/* PREVIEW */}
        {formData.image && (

          <div className="mt-8">

            <p className="mb-3 text-sm font-medium text-[#384152]">
              Image Preview
            </p>

            <div className="w-64 h-64 bg-[#FAF7F2] border border-[#EFE3C8] rounded-3xl overflow-hidden">

              <img
                src={`/images/${formData.image}`}
                alt={formData.name}
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        )}

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-8 px-8 py-3 rounded-2xl bg-[#D4B06A] text-white"
        >
          Save Changes
        </button>

      </form>

    </div>
  );
}

export default EditProduct;
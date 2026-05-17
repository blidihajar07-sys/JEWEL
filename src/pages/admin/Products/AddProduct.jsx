import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    alert("Product added successfully");

    navigate("/admin/products");
  };

  return (
    <div className="max-w-5xl">

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold text-[#384152]">
          Add Product
        </h1>

        <p className="text-[#384152]/60 mt-2">
          Create a new jewelry product
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
              placeholder="Diamond Ring"
              className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#384152]">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Rings"
              className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#384152]">
              Price (MAD)
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="2500"
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
              placeholder="10"
              className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            />
          </div>

          {/* MATERIAL */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#384152]">
              Material
            </label>

            <input
              type="text"
              name="material"
              value={formData.material}
              onChange={handleChange}
              placeholder="Gold"
              className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none focus:border-[#D4B06A]"
            />
          </div>

          {/* CARAT */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#384152]">
              Carat
            </label>

            <input
              type="text"
              name="carat"
              value={formData.carat}
              onChange={handleChange}
              placeholder="18K"
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
              value={formData.clarity}
              onChange={handleChange}
              placeholder="VVS1"
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
              placeholder="ring.jpg"
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
            value={formData.description}
            onChange={handleChange}
            rows="5"
            placeholder="Describe the product..."
            className="w-full border border-[#EFE3C8] rounded-2xl px-4 py-3 outline-none resize-none focus:border-[#D4B06A]"
          />

        </div>

        {/* IMAGE PREVIEW */}
        {formData.image && (
          <div className="mt-8">

            <p className="mb-3 text-sm font-medium text-[#384152]">
              Preview
            </p>

            <div className="w-64 h-64 bg-[#FAF7F2] border border-[#EFE3C8] rounded-3xl flex items-center justify-center p-6">

              <img
                src={`/images/${formData.image}`}
                alt="Preview"
                className="max-h-full object-contain"
              />

            </div>

          </div>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          className="mt-8 px-8 py-3 rounded-2xl bg-[#D4B06A] text-white"
        >
          Add Product
        </button>

      </form>

    </div>
  );
}

export default AddProduct;
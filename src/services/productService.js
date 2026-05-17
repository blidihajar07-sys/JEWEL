const API_URL = "http://127.0.0.1:8000/api";

// GET ALL
export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

// GET ONE
export const getProductById = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`);
  return res.json();
};

// CREATE
export const createProduct = async (productData) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });

  return res.json();
};

// UPDATE
export const updateProduct = async (id, productData) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });

  return res.json();
};

// DELETE
export const deleteProduct = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
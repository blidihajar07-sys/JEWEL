const API_URL = "http://127.0.0.1:8000/api";

// CREATE ORDER
export const createOrder = async (orderData) => {

  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/orders`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(orderData),
  });

  return res.json();
};

// USER ORDERS
export const getOrders = async () => {

  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/orders`, {

    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

// ADMIN ORDERS
export const getAllOrders = async () => {

  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/admin/orders`, {

    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
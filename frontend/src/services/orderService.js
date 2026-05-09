// const API_URL = "http://127.0.0.1:8000/api";

// export const createOrder = (cart, total) => {
//   const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

//   const newOrder = {
//     id: Date.now(),
//     items: cart,
//     total,
//     status: "pending",
//     createdAt: new Date().toISOString(),
//   };

//   const updatedOrders = [...existingOrders, newOrder];

//   localStorage.setItem("orders", JSON.stringify(updatedOrders));

//   return newOrder;
// };

// export const getOrders = () => {
//   return JSON.parse(localStorage.getItem("orders")) || [];
// };

const API_URL = "http://127.0.0.1:8000/api";

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

export const getOrders = async () => {

  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
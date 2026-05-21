const API_URL = "http://127.0.0.1:8000/api";

export const getDashboardStats = async () => {

  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/admin/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
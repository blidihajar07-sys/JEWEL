import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../services/authService";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext";

function LoginForm() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = await loginUser(formData);

    setLoading(false);

    if (data.message) {
      setError(data.message);
      return;
    }

    login(data);

    const from = location.state?.from;

if (from) {

  navigate(from, { replace: true });

} else {

  if (data.user.role === "admin") {

    navigate("/admin", { replace: true });

  } else {

    navigate("/", { replace: true });

  }

}    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-[#DCEAF4] rounded-2xl p-8 shadow-sm">

        <h1 className="text-2xl font-bold text-[#384152] text-center">
          Welcome back
        </h1>

        <p className="text-sm text-[#384152]/60 text-center mt-2">
          Login to continue shopping
        </p>

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />

          <Button type="submit" className="w-full mt-2" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>

        </form>

        <p className="text-sm text-center text-[#384152]/60 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#D4B06A] font-medium">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default LoginForm;
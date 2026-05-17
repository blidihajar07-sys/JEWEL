import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/authService";
import Input from "../ui/Input";
import Button from "../ui/Button";

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

    const data = await registerUser(formData);

    setLoading(false);

    if (data.message) {
      setError(data.message);
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-[#F3DDE5] rounded-2xl p-8 shadow-sm">

        <h1 className="text-2xl font-bold text-[#384152] text-center">
          Create account
        </h1>

        <p className="text-sm text-[#384152]/60 text-center mt-2">
          Join Serene Spark today
        </p>

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <Input
            label="Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />

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
            placeholder="Create a password"
            onChange={handleChange}
          />

          <Button type="submit" className="w-full mt-2" disabled={loading}>
            {loading ? "Creating account..." : "Register"}
          </Button>

        </form>

        <p className="text-sm text-center text-[#384152]/60 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#D4B06A] font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default RegisterForm;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../services/authService";

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = await loginUser(formData);

//     if (data.message) {
//       alert(data.message);
//       return;
//     }

//     localStorage.setItem("token", data.token);
//     localStorage.setItem("user", JSON.stringify(data.user));

//     if (data.user.role === "admin") {
//       navigate("/admin");
//     } else {
//       navigate("/");
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />

//         <br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />

//         <br />

//         <button type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import LoginForm from "../../components/auth/LoginForm";

function Login() {
  return <LoginForm />;
}

export default Login;
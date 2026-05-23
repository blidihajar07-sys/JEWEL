// React root rendering
import React from "react";
import ReactDOM from "react-dom/client";

// Main app component
import App from "./App";

// Global providers
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

// Global styles
import "./index.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Global authentication state */}
    <AuthProvider>

      {/* Global cart state */}
      <CartProvider>
        <App />
      </CartProvider>
      
    </AuthProvider>
  </React.StrictMode>
);
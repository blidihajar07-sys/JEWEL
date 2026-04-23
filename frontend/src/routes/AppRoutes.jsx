import { BrowserRouter, Routes, Route } from "react-router-dom";

// auth
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// user
import Home from "../pages/user/Home";
import Products from "../pages/user/Products";
import ProductDetails from "../pages/user/ProductDetails";
import Cart from "../pages/user/Cart";
import Checkout from "../pages/user/Checkout";
import Orders from "../pages/user/Orders";
import OrderDetails from "../pages/user/OrderDetails";

// admin
import Dashboard from "../pages/admin/Dashboard";
import ProductsList from "../pages/admin/Products/ProductsList";
import AddProduct from "../pages/admin/Products/AddProduct";
import EditProduct from "../pages/admin/Products/EditProduct";
import OrdersList from "../pages/admin/Orders/OrdersList";
import AdminOrderDetails from "../pages/admin/Orders/OrderDetails";

// protection
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* user */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />

        {/* admin protected */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute role="admin">
              <ProductsList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products/add"
          element={
            <ProtectedRoute role="admin">
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products/edit/:id"
          element={
            <ProtectedRoute role="admin">
              <EditProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute role="admin">
              <OrdersList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders/:id"
          element={
            <ProtectedRoute role="admin">
              <AdminOrderDetails />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
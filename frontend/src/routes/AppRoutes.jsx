import { BrowserRouter, Routes, Route } from "react-router-dom";

//auth pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

//user pages
import Home from "../pages/user/Home";
import Checkout from "../pages/user/Checkout";
import Cart from "../pages/user/Cart";
import Orders from "../pages/user/Orders";
import OrderDetails from "../pages/user/OrderDetails";
import Products from "../pages/user/Products";
import ProductDetails from "../pages/user/ProductDetails";

//admin pages
import Dashboard from "../pages/admin/Dashboard";
import ProductsList from "../pages/admin/Products/ProductsList";
import AddProduct from "../pages/admin/Products/AddProduct";
import EditProduct from "../pages/admin/Products/EditProduct";
import OrdersList from "../pages/admin/Orders/OrdersList";
import AdminOrderDetails from "../pages/admin/Orders/OrderDetails";

//Layout Components
import UserLayout from "../components/layouts/UserLayout";
import AdminLayout from "../components/layouts/AdminLayout";

// protection
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        
        {/* USER */}
        <Route path="/" element={<UserLayout> <Home /> </UserLayout>} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute role="user">
              <UserLayout>
                <Checkout />
              </UserLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute role="user">
              <UserLayout>
                <Cart />
              </UserLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute role="user">
              <UserLayout>
                <Orders />
              </UserLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders/:id"
          element={
            <ProtectedRoute role="user">
              <UserLayout>
                <OrderDetails />
              </UserLayout>
            </ProtectedRoute>
          }
        />

        <Route path="/products" element={ <UserLayout> <Products /> </UserLayout>} />
        <Route path="/products/:id" element={ <UserLayout> <ProductDetails /> </UserLayout>} />
        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout>
                <ProductsList />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products/add"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout>
                <AddProduct />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products/edit/:id"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout>
                <EditProduct />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout>
                <OrdersList />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders/:id"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout>
                <AdminOrderDetails />
              </AdminLayout>
            </ProtectedRoute>
          }
        />


        {/* AUTH */}



      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
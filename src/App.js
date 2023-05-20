import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import ProductDetails from "./pages/ProductDetails";
//  Small Components
import Search from "./components/Search";
import Categories from "./components/Categories";
import Pagenotfound from "./components/Pagenotfound";
import Policy from "./components/Policy";

import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";
import UpdateProfile from "./pages/user/UpdateProfile";
import Checkout from "./pages/Checkout";
import Payment from "../src/components/Payment";
import Swiss from "./pages/Swiss";
import Dashborad from "./pages/Admin/Dashborad";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
function App() {
  return (
    <>
    <Header/>
          <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/swiss" element={<Swiss/>} />    
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />

<Route path="/payment" element={<Payment/>} />

        <Route path="/cart/checkout" element={<Checkout />} />

        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />} />
        <Route path="/dashboard/user" element={<Dashboard />} />
        <Route path="/dashboard/user/orders" element={<Orders />} />
        <Route path="/dashboard/user/profile" element={<Profile />} />
        <Route
          path="/dashboard/user/updateprofile"
          element={<UpdateProfile />}
        />

        <Route path="/dashboard" element={<AdminRoute />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route
          path="dashboard/admin/create-category"
          element={<CreateCategory />}
        />
              <Route path="dashboard/admin/ecommerce" element={<Dashborad/>} />

        <Route
          path="/dashboard/admin/create-product"
          element={<CreateProduct />}
        />
        <Route
          path="/dashboard/admin/product/:slug"
          element={<UpdateProduct />}
        />
        <Route path="/dashboard/admin/products" element={<Products />} />
        <Route path="/dashboard/admin/users" element={<Users />} />
        <Route path="/dashboard/admin/orders" element={<AdminOrders />} />

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer/>
    
    </>
  );
}

export default App;

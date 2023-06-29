import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { getAllProductsThunk } from "./store/slice/products.slice";
import { useEffect } from "react";
import ProductIdPage from "./pages/ProductIdPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/shared/Header";
import CartPage from "./pages/CartPage";
import { getCartThunk } from "./store/slice/cart.slice";
import PurchasesPage from "./pages/PurchasesPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import UserPage from "./pages/UserPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
    dispatch(getCartThunk());
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductIdPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/purchases" element={<PurchasesPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

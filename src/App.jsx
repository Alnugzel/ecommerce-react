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
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;

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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductIdPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;

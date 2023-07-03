import { useNavigate } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar__container">
        <nav className="navbar__content">
          <div className="navbar__logo">
            <h1 onClick={() => navigate("/")}>e-commerce</h1>
          </div>

          <button className="navbar__options" onClick={() => navigate("/user")}>
            <i className="bx bx-user"></i>
          </button>

          <button
            className="navbar__options"
            onClick={() => navigate("/register")}
          >
            <i className="bx bx-list-plus"></i>
          </button>

          <button
            className="navbar__options"
            onClick={() => navigate("/purchases")}
          >
            <i className="bx bx-purchase-tag"></i>
          </button>

          <button className="navbar__options" onClick={() => navigate("/cart")}>
            <i className="bx bx-cart-alt"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

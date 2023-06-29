import { Link, useNavigate } from "react-router-dom";
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
            <i class="bx bx-user"></i>
          </button>

          <button
            className="navbar__options"
            onClick={() => navigate("/register")}
          >
            <i class="bx bx-list-plus"></i>
          </button>

          <button
            className="navbar__options"
            onClick={() => navigate("/purchases")}
          >
            <i class="bx bx-purchase-tag"></i>
          </button>

          <button className="navbar__options" onClick={() => navigate("/cart")}>
            <i class="bx bx-cart-alt"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

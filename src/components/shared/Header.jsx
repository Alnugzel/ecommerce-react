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
          <ul className="">
            <li>
              <Link to="/register"> Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

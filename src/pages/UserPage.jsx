import { useNavigate } from "react-router-dom";
import "../components/styles/LoginPage.css";

const UserPage = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("userName", "");
    navigate("/login");
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__form user__info">
          <img src="/user.png" alt="" className="user__avatar" />
          <b>{localStorage.getItem("userName")}</b>
          <button className="login__btn" onClick={logout}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;

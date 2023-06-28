import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import "../components/styles/LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm();

  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const submit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
    loginUser(url, data);
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="login__container">
        <form className="login__form" onSubmit={handleSubmit(submit)}>
          <p>Welcome! Please enter your email and password</p>
          <div className="login__form-input">
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" id="email" />
          </div>
          <div className="login__form-input">
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" id="password" />
          </div>
          <button className="login__btn">Login</button>

          <div className="link__register">
            Don't have an account?{" "}
            <button type="button" onClick={goToRegister}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

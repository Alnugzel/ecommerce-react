import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser } = useAuth();

  const navigate = useNavigate();

  const submit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users";
    createUser(url, data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="login">
      <div className="login__container">
        <form className="login__form" onSubmit={handleSubmit(submit)}>
          <div className="login__form-input">
            <label htmlFor="firstName">First name</label>
            <input {...register("firstName")} type="text" id="firstName" />
          </div>
          <div className="login__form-input">
            <label htmlFor="lastName">Last name</label>
            <input {...register("lastName")} type="text" id="lastName" />
          </div>
          <div className="login__form-input">
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" id="email" />
          </div>
          <div className="login__form-input">
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" id="password" />
          </div>
          <div className="login__form-input">
            <label htmlFor="phone">Phone</label>
            <input {...register("phone")} type="number" id="phone" />
          </div>
          <button className="login__btn">Submit</button>
          <div className="link__register">
            Don't have an account?{" "}
            <button type="button" onClick={goToLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

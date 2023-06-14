import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { checkAccount } from "../../services/authentication";
import "./Login.scss";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [invalidate, setInvalidate] = useState("");

  const onSubmit = async (data) => {
    const response = await checkAccount(data.gmail, data.password);
    console.log("hello");

    if (response) {
      window.location = "http://localhost:3000/admin/product";
    } else {
      setInvalidate("Wrong password or email");
    }

    reset();
  };

  return (
    <div className="login">
      <div className="login__container">
        <div>
          <h1>
            Welcome <br /> to The Speak <br /> User Zone
          </h1>
          <Link to="/" className="login__goback">
            <i class="fa-solid fa-arrow-left"></i>
            Back to store
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} class="login__form">
          <h4>Login</h4>
          <p>
            This is a secure system and you will need to provide your login
            details to access the site
          </p>
          <div className="form__element">
            <h5 class="form__title">Email</h5>
            <input
              class="form__input"
              placeholder="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  // eslint-disable-next-line no-useless-escape
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <p class="form__error">Please check the Email</p>}
          </div>

          <div className="form__element">
            <h5 class="form__title">Password</h5>
            <input
              class="form__input"
              placeholder="Password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <p class="form__error">Please check the Password</p>
            )}
            {invalidate && <p class="form__error">{invalidate}</p>}
          </div>
          <p className="forgetpass">Forget password</p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="login__button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

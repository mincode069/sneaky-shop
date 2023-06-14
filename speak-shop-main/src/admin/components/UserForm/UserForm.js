import React from "react";
import { useForm } from "react-hook-form";
import { addUser, editUser } from "../../../services/user-service";

import "./UserForm.scss";

function UserForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      ...props.user,
    },
  });
  const handleSubmitHelper = (id, data, serviceFunc) => {
    console.log(data);
    handleSubmit(() => {
      serviceFunc(data.firstName, data.lastName, data.email, data.password, id)
        .then((response) => {
          props.onClose();
          reset();
          props.onEdit(0);
          props.onGetUser();
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  };

  const onSubmit = (data) => {
    if (props.isEdit) {
      handleSubmitHelper(props.user.id, data, editUser);
    } else {
      handleSubmitHelper(null, data, addUser);
    }
  };

  return (
    <div>
      {props.show ? (
        <form onSubmit={handleSubmit(onSubmit)} class="au__container">
          <div class="au__form">
            <h5 class="form__title">First Name</h5>
            <input
              class="form__input"
              placeholder="First Name"
              type="text"
              {...register("firstName", {
                required: true,
              })}
            />
            {errors.firstName && (
              <p class="form__error">Please check the First Name</p>
            )}
          </div>

          <div class="au__form">
            <h5 class="form__title">Last Name</h5>
            <input
              class="form__input"
              placeholder="Last Name"
              type="text"
              {...register("lastName", {
                required: true,
              })}
            />
            {errors.lastName && (
              <p class="form__error">Please check the Last Name</p>
            )}
          </div>

          <div class="au__form">
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

          <div class="au__form">
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
          </div>
          <div class="form__button-container ">
            <button type="button" onClick={props.onClose} class="form__button ">
              Close
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              class="form__button submit__button"
            >
              Submit
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default UserForm;

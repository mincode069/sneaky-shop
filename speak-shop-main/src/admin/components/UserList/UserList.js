import React from "react";
import { deleteUser } from "../../../services/user-service";
import "./UserList.scss";

const ShowUser = (props) => {
  const onDelete = async (id) => {
    const result = await deleteUser(id);
    console.log(result);
    props.onGetUser();
  };
  const handleEdit = (id) => {
    props.onEdit(id);
  };
  return (
    <div class="su__container">
      <div>{props.id}</div>
      <div>
        {props.firstName} {props.lastName}
      </div>
      <div>{props.email}</div>
      <div>{props.password}</div>
      <div>
        <i
          type="button"
          onClick={() => onDelete(props.id)}
          class="fa-solid fa-trash"
        ></i>
        <i
          type="button"
          onClick={() => handleEdit(props.id)}
          class="fa-solid fa-pen"
        ></i>
      </div>
    </div>
  );
};

export default ShowUser;

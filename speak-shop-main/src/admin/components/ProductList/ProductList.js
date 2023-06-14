import React from "react";
import { deleteProduct } from "../../../services/product-service";
import "./ProductList.scss";

const ShowProduct = (props) => {
  const onDelete = async (id) => {
    const result = await deleteProduct(id);
    console.log(result);
    props.onGetProduct();
  };
  console.log(props);
  const handleEdit = (id) => {
    props.onEdit(id);
  };
  return (
    <div class="sp__container">
      <div>{props.id}</div>
      <div>{props.title}</div>
      <div>{props.price}</div>
      <div>{props.category}</div>
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

export default ShowProduct;

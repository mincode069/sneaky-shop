import { memo } from "react";
import "./cart.scss";

const Cart = ({ totalProduct, onClick }) => {
  return (
    <span onClick={onClick} className="Cart">
      <span className="Cart__number">{totalProduct}</span>
      <i className="fa-solid fa-cart-shopping Cart__icon"></i>
    </span>
  );
};
export default memo(Cart);

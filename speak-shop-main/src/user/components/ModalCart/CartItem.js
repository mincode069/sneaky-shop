import { useContext, memo } from "react";

import { AppContext, ACTIONS } from "../../store";

const CartItem = ({ id, img, price, quantity, title }) => {
  const { dispatch } = useContext(AppContext);
  const handleAddProductInCart = () => {
    dispatch({ type: ACTIONS.ADD_QUANTITY, payload: id });
  };
  const handleReduceProductInCart = () => {
    dispatch({ type: ACTIONS.REDUCE_QUANTITY, payload: id });
  };

  return (
    <div className="CartItem">
      <img className="CartItem__image" alt="" src={img.URLImg} />
      <div className="CartItem__content">
        <span className="CartItem__title">{title}</span>
        <div className="CartItem__quantity">
          <i
            onClick={handleReduceProductInCart}
            className="fa-sharp fa-solid fa-minus CartItem__quantity-icon"
          ></i>
          {quantity}
          <i
            onClick={handleAddProductInCart}
            className="fa-sharp fa-solid fa-plus CartItem__quantity-icon"
          ></i>
        </div>
      </div>
      <div className="CartItem__price">Price: {price * quantity}$</div>
    </div>
  );
};
export default memo(CartItem);

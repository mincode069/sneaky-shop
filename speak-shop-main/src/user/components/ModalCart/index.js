import { useContext, useMemo } from "react";
import { Animate } from "react-simple-animate";

import { AppContext } from "../../store";
import CartItem from "./CartItem";

import "./ModalCart.scss";

const ModalCart = ({ onCloseModal }) => {
  const { cart } = useContext(AppContext).state;
  const totalPrice = useMemo(() => {
    let totalPrice = 0;
    for (let i = 0; i < cart?.length; i++) {
      totalPrice = totalPrice + cart[i].price * cart[i].quantity;
    }
    return totalPrice;
  }, [cart]);

  console.log(cart);
  return (
    <Animate play keyframes={["opacity: 0", "opacity: 1"]}>
      <div className="ModalCart">
        <h3 className="ModalCart__title">Cart</h3>
        <span onClick={onCloseModal} className="ModalCart__icon">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="ModalCart__content">
          {cart.length > 0 ? (
            cart.map((e, index) => <CartItem {...e} key={index} />)
          ) : (
            <div>No data</div>
          )}
        </div>

        <div className="ModalCart__totalPrice">
          <button className="ModalCart__totalPrice-button">Buy now</button>
          <span className="ModalCart__totalPrice-content">
            Total: {totalPrice || 0}$
          </span>
        </div>
      </div>
    </Animate>
  );
};

export default ModalCart;

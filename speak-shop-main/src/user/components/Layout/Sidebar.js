import { useContext, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { isLoggedIn } from "../../../services/authentication";
import { AppContext } from "../../store";
import { menuSideBar } from "../../constants";
import Cart from "../Cart";
import Modal from "../../components/Modal";
import "./Sidebar.scss";
import ModalCart from "../ModalCart";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { state } = useContext(AppContext);
  const [visibleModalCart, setVisibleModalCart] = useState(false);

  const handleLogin = () => {
    if (isLoggedIn()) {
      window.location = "http://localhost:3000/admin/product";
    } else {
      window.location = "http://localhost:3000/login";
    }
  };
  return (
    <div className="Sidebar__container">
      <div className="Sidebar__content">
        <Link to="/" className="Content__name">
          <h1 className="Sidebar__shopName">
            {" "}
            Speak <br /> Shop{" "}
          </h1>
        </Link>
        <div className="Sidebar__extra">
          <i className="fa-regular fa-circle-user" onClick={handleLogin}></i>

          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-heart"></i>
          <Cart
            totalProduct={state.cart.length}
            onClick={() => setVisibleModalCart(true)}
          />
        </div>
        <ul className="Sidebar__navLink">
          {menuSideBar.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.link}
              className={`Nav__links ${
                menu.link === pathname ? "Nav__links-selected" : ""
              }`}
            >
              {menu.label}
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="Sidebar__footer">
        <p className="Sidebar__hotline">
          <i className="fa-solid fa-phone"></i> 1900 686 999
        </p>
        <div className="Sidebar__connect">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
      </div>

      <Modal
        visible={visibleModalCart}
        onCloseModal={() => setVisibleModalCart(false)}
      >
        <ModalCart onCloseModal={() => setVisibleModalCart(false)} />
      </Modal>
    </div>
  );
};

export default Sidebar;

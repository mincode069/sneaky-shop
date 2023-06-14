import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const removeToken = () => {
    localStorage.clear();
    window.location = "http://localhost:3000/login";
  };
  return (
    <div className="Sidebar__container">
      <div className="Sidebar__content">
        <h1 className="Sidebar__shopName">
          Speak <br /> Shop
        </h1>
        <ul className="Sidebar__navLink">
          <NavLink
            to="/admin/product"
            className={`Nav__links ${
              "/admin/product" === pathname ? "Nav__link-selected" : ""
            }`}
          >
            Product
          </NavLink>
          <NavLink
            to="/admin/user"
            className={`Nav__links ${
              "/admin/user" === pathname ? "Nav__link-selected" : ""
            }`}
          >
            Admin
          </NavLink>
          <NavLink
            to="/"
            className={`Nav__links ${
              "/" === pathname ? "Nav__link-selected" : ""
            }`}
          >
            View store
          </NavLink>
        </ul>
      </div>
      <div className="Sidebar__comeback" onClick={removeToken}>
        Log out
      </div>
    </div>
  );
};

export default Sidebar;

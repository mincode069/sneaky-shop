import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Store, AppContext } from "./user/store";
import { DefaultLayout } from "./user/layout";
import { AdminLayout } from "./admin/layout";
import Login from "./auth/pages/Login";
import User from "./admin/pages/User";
import Product from "./admin/pages/Product";
import Home from "./user/pages/Home";
import Jacket from "./user/pages/Jacket";
import Backpack from "./user/pages/Backpack";
import Slingbag from "./user/pages/Slingbag";
import Cap from "./user/pages/Cap";
import Belt from "./user/pages/Belt";
import DetailProductPage from "./user/pages/DetailProduct";
import "./App.scss";
function App() {
  const { state, dispatch } = Store();
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<DefaultLayout children={<Home />} />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/admin/user"
            element={<AdminLayout children={<User />} />}
          />
          <Route
            exact
            path="/admin/product"
            element={<AdminLayout children={<Product />} />}
          />
          <Route
            exact
            path="/jacket"
            element={<DefaultLayout children={<Jacket />} />}
          />
          <Route
            exact
            path="/backpack"
            element={<DefaultLayout children={<Backpack />} />}
          />
          <Route
            exact
            path="/slingbag"
            element={<DefaultLayout children={<Slingbag />} />}
          />
          <Route
            exact
            path="/cap"
            element={<DefaultLayout children={<Cap />} />}
          />
          <Route
            exact
            path="/belt"
            element={<DefaultLayout children={<Belt />} />}
          />
          <Route
            exact
            path="/product/:idProduct"
            element={<DefaultLayout children={<DetailProductPage />} />}
          />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

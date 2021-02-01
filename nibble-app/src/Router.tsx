import Cart from "pages/Cart";
import Login from "pages/Login";
import Profile from "pages/Profile";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./pages/Products";

const Router = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/">
        <Products />
      </Route>
    </Switch>
  );
};

export default Router;

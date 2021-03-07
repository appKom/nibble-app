import Cart from "pages/Cart";
import Profile from "pages/Profile";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useRecoilState } from "recoil";
import authState from "state/auth";
import Products from "./pages/Products";

const Router = () => {
  const [auth] = useRecoilState(authState);
  if (!auth) return <Redirect to="/login" />;
  return (
    <Switch>
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

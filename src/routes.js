import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import ProductList from "./containers/ProductList";
import mProductList from "./containers/mProductList";
import cProductList from "./containers/cProductList";
import aProductList from "./containers/aProductList";

import ProductDetail from "./containers/ProductDetail";
import OrderSummary from "./containers/OrderSummary";
import Checkout from "./containers/Checkout";
import Profile from "./containers/Profile";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/products" component={ProductList} />
    <Route exact path="/mproducts" component={mProductList} />
    <Route exact path="/cproducts" component={cProductList} />
    <Route exact path="/aproducts" component={aProductList} />

    <Route path="/products/:productID" component={ProductDetail} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/order-summary" component={OrderSummary} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/" component={HomepageLayout} />
  </Hoc>
);

export default BaseRouter;

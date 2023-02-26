import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";

import pathsApp from "./pathsApp";
import CartPage from "./pages/CartPage";
import Header from "../../tools/ui_components/header";

const AppRouter = () => (
  <Router>
    <div>
      <Header></Header>

      <div>
        <Switch>
          <Route exact path={pathsApp.home}>
            <HomePage />
          </Route>

          <Route path={pathsApp.catalog}>
            <CatalogPage />
          </Route>

          <Route path={pathsApp.cart}>
            <CartPage />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default AppRouter;

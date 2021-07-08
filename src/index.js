import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mainRoutes } from "./routes";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./index.less";
console.log("mainRoutes", mainRoutes);

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" component={() => <App />} />
      {mainRoutes.map((item, index) => {
        return (
          <Route
            key={index + 1}
            path={item.pathname}
            component={item.component}
          />
        );
      })}
      <Redirect to="/admin" from="/" exact />
      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

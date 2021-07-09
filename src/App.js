import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Frame from "./page/component/frame";
import { adminRoutes } from "./routes";
import "./App.less";

class App extends Component {
  render() {
    return (
      <Frame>
        <Switch>
          {adminRoutes.map((route, index) => {
            return (
              <Route
                key={index + 1}
                path={route.pathname}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Frame>
    );
  }
}
export default App;

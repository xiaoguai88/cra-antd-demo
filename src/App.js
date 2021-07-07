import React from "react";
import { Button } from "antd";
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './page/Home'
import "./App.less";

function App() {
  return (<Router>
    <Route path='/home' component={Home} exact />
    create-react-app
  </Router>)
}

export default App;

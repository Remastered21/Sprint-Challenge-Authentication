import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Redirect } from "react-router-dom";

import Jokes from "./components/Jokes";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Welcome </h1>
        <Redirect from="/" to="/login" />
        <Route path="/jokes" component={Jokes} />
        <Route path="/users" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;

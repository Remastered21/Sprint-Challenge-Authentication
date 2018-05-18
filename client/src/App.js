import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Redirect } from "react-router-dom";

import Jokes from "./components/Jokes"
import Login from "./components/Login"
import Register from "./components/Register"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Welcome </h1>
        <Route
          path="/"
          render={() => {
            <Redirect to="/api/login" />;
          }}
        />
        <Route path="/api/" Component={} />
        <Route path="/api/" Component={} />
        <Route path="/api/" Component={} />
      </div>
    );
  }
}

export default App;

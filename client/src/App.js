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
        <h1> JokeBox </h1>
        <Route
          exact
          path="/"
          render={() => <Redirect from="/" to="/login" />}
        />
        <Route exact path="/jokes" component={Jokes} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";

export default class Jokes extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
      isUnauthorized: false,
      isJokeHidden: true
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const authToken = `${token}`;
    const requestOption = {
      headers: {
        Authorization: authToken
      }
    };

    axios
      .get("http://localhost:5000/api/jokes", requestOption)
      .then(response => {
        this.setState({ isUnauthorized: false });
        this.setState({ jokes: response.data });
      })
      .catch(err => {
        this.setState({ isUnauthorized: true });
        this.props.history.push("/login");
      });
  };

  signOutHandler = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };

  punchlineEnabler = () => {
    this.setState({ isJokeHidden: !this.state.isJokeHidden });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.isUnauthorized
          ? alert("Unauthorized Access. Please log-in first.")
          : null}

        <button onClick={this.signOutHandler}>Sign out</button>

        <h1>Dad jokes:</h1>
        {this.state.jokes.map(eachJokes => (
          <div key={eachJokes.id}>
            <p>{eachJokes.setup}</p>
            {this.state.isJokeHidden ? null : <h3>{eachJokes.punchline}</h3>}
            <button onClick={this.punchlineEnabler}>PUNCHLINE!</button>
          </div>
        ))}
      </div>
    );
  }
}

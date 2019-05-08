import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {
  state = {};
  handleChange = (event, nameAttr) => {
    this.setState({ [nameAttr]: event.target.value });
  };

  handleSubmit = () => {
    axios
      .post('/api/users/signup', this.state)
      .then(user => {
        this.setState({ user });
        console.log(this.state);
      })
      .catch(err => {
        if (err) throw err;
      });
  };
  render() {
    return (
      <div>
        <h1>Roomor App: Register</h1>
        <input
          type="text"
          placeholder="enter a username"
          name="username"
          onChange={event => this.handleChange(event, event.target.name)}
        />
        <input
          type="text"
          onChange={event => this.handleChange(event, event.target.name)}
          placeholder="email"
          name="email"
        />
        <input
          type="text"
          onChange={event => this.handleChange(event, event.target.name)}
          placeholder="lastName"
          name="lastName"
        />
        <input
          type="text"
          onChange={event => this.handleChange(event, event.target.name)}
          placeholder="firstName"
          name="firstName"
        />
        <input
          type="text"
          name="password"
          placeholder="enter a password"
          onChange={event => this.handleChange(event, event.target.name)}
        />
        <button onClick={this.handleSubmit} value="submit">
          Submit
        </button>
      </div>
    );
  }
}

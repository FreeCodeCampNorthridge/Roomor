import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  // empty state
  state = {};
  // on submit
  handleSubmit = () => {
    // post state to login route
    axios
      .post('/api/users/login', this.state)
      // set state with response from server
      .then(response => {
        this.setState({ user: response.data.user }, () =>
          // log current state
          console.log(this.state)
        );
      })
      // throw error if something went wrong
      .catch(err => {
        if (err) throw err;
      });
  };
  // on event
  handleChange = (e, key) => {
    // grab event value
    let value = e.target.value;
    // set state of key equal to vale and log
    this.setState({ [key]: value }, () => console.log(this.state));
  };

  render() {
    return (
      <div>
        <h1>Roomor App</h1>
        <input
          type="text"
          onChange={e => this.handleChange(e, 'username')}
          placeholder="username"
        />
        <input
          type="text"
          onChange={e => this.handleChange(e, 'email')}
          placeholder="email"
        />
        <input
          type="text"
          onChange={e => this.handleChange(e, 'password')}
          placeholder="password"
        />
        <button onClick={this.handleSubmit} value="Submit" />
      </div>
    );
  }
}
export default App;

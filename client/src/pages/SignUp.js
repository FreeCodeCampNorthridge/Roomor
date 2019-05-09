import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';

export default class SignUp extends Component {
  state = {};
  handleChange = ({ target: { value } }, name) => {
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    axios
      .post('/api/users/signup', this.state)
      .then(user => {
        this.setState({ user });
      })
      .catch(err => {
        if (err) throw err;
      });
  };
  render() {
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="username">username</InputLabel>
          <Input
            type="text"
            id="username"
            name="username"
            autoFocus
            onChange={event => this.handleChange(event, 'username')}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">email</InputLabel>
          <Input
            id="email"
            type="text"
            onChange={event => this.handleChange(event, 'email')}
            name="email"
            autoComplete="email"
            autoFocus
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="lastName">lastName</InputLabel>
          <Input
            id="lastName"
            type="text"
            onChange={event => this.handleChange(event, 'lastName')}
            name="lastName"
            autoFocus
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="firstName">firstName</InputLabel>
          <Input
            id="firstName"
            type="text"
            onChange={event => this.handleChange(event, 'firstName')}
            name="firstName"
            autoFocus
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">password</InputLabel>
          <Input
            id="password"
            type="text"
            name="password"
            autoFocus
            autoComplete="current-password"
            onChange={event => this.handleChange(event, 'password')}
          />
        </FormControl>
        <Button
          onClick={this.handleSubmit}
          color="primary"
          variant="contained"
          type="submit"
        >
          Register
        </Button>
      </div>
    );
  }
}

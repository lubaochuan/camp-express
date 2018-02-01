import React, { Component } from 'react';
import './App.css';
import { apiUrl } from './environment/environment';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch(`${apiUrl}/users`)
      .then(res => res.json())
      .then(users => {
        return this.setState({ users });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <ul>
        {this.state.users.map((user, i) => (
          <li key={i}>
            <h2>User {i + 1}</h2>
            <p>Name: {user.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default App;

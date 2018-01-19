import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.getMessage();
  }

  getMessage() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => {
        console.log('users', users);
        return this.setState({ users });
      });
  }

  render() {
    console.log(this.state);
    return (
      <ul>
        {this.state.users.map((user, i) => (
          <div key={i}>
            <h2>User {i + 1}</h2>
            <p>Name: {user.name}</p>
          </div>
        ))}
      </ul>
    );
  }
}

export default App;

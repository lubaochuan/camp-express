import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { message: '' };

  componentDidMount() {
    this.getMessage();
  }

  getMessage = () => {

    fetch('/api/test')
      .then(res => res.json())
      .then(message => {
        console.log('message', message);
        return this.setState(message);
      });
  }

  render() {
    return (
      <p>Message: { this.state.message }</p>
    );
  }
}

export default App;
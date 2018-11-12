import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
class App extends Component {
  render() {
    const someMessage = 'some message';
    return (
      <div className="App">
        <Message message={someMessage}></Message>
      </div>
    );
  }
}

export default App;

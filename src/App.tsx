import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './containers/Main';
class App extends Component {
  render() {
    const someMessage = 'some message';
    return (
      <Main />
    );
  }
}

export default App;

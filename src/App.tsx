import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout';
class App extends Component {
  render() {
    const someMessage = 'some message';
    return (
      <Layout />
    );
  }
}

export default App;

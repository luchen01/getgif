import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GetGif</h1>
        </header>
        <p className="App-intro">
          Because life is better with a little gif!
        </p>
        <Content />
      </div>
    );
  }
}

export default App;

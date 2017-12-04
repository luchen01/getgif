import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://liveatpc.com/wp-content/uploads/2017/07/gallery-1471381857-gif-season-2.gif"} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Welcome to GetGif</h1>
        <p className="App-intro">
          Because life is better with a little gif!
        </p>
        <Content />
      </div>
    );
  }
}

export default App;

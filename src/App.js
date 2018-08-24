import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Thomas Fogg</h1>
        </header>

        <Home />

      </div>
    );
  }
}

export default App;

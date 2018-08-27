import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" render={() => <Home />}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

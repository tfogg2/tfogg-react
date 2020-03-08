import React, { Component } from 'react';
import './Assets/App.css';
import Home from './Components/Home'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" render={() => <Home />}/>
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react"
import "./Assets/App.css"
import Home from "./Components/Home"
import { LoadingContextProvider } from "./LoadingContext"
import { Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <LoadingContextProvider>
      <div className="App">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </LoadingContextProvider>
  )
}

export default App

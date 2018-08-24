import React, { Component } from 'react';
import _ from 'lodash'

class Home extends Component {
  state = {
    loaded: false
  }
  componentDidMount() {
    _.delay( () => {
      this.setState({
        loaded: true
      })
    }, 200 )
  }

  render(){
    const homeClass = this.state.loaded ? 'home-bg visible' : 'home-bg'
    return(
      <div className="home">
        <div className="home-cta">
          <h1>Home</h1>
        </div>
        <div className="splash-background">
          <div className={homeClass}></div>
        </div>
      </div>
    )
  }
}


export default Home;

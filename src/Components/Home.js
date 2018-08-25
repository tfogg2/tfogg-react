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
      <div className="content">
        <div className="landing page">
          <div className="home-cta">
            <h1>Home</h1>
          </div>
          <div className="splash-background">
            <div className={homeClass}></div>
          </div>
        </div>
        <div className="camuro page"></div>
        <div className="abundant page"></div>
        <div className="freedash page"></div>
        <div className="skill page"></div>
        <div className="passion page"></div>
        <div className="contact page"></div>
        <footer></footer>
      </div>
    )
  }
}


export default Home;

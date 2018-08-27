import React, { Component } from 'react';
import _ from 'lodash'

class Landing extends Component {
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

      <div className="landing page">
        <div className="cta">
          <div className="cta-header">
            <img src={require('../Assets/cta-header.svg')} alt="cta header" />
          </div>
          <div className="cta-body">
            <p>Thomas Fogg is a </p>
            <div className="social-icons">
              <img src={require('../Assets/linkedIn-black.svg')} alt="LinkedIn" />
              <img src={require('../Assets/facebook-black.svg')} alt="Facebook" />
              <img src={require('../Assets/instagram-black.svg')} alt="Instagram" />
            </div>
            <button>Say Hello!</button>
          </div>
        </div>
        <div className="splash-background">
          <div className={homeClass}></div>
        </div>
      </div>

    )
  }
}


export default Landing;

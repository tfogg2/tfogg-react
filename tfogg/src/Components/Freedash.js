import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Freedash extends Component {
  render(){
    return(
      <div className="freedash page">
        <Fade left>
          <div className="display-content">
            <span>.002</span>
            <img src={require('../Assets/freedash-mockup.svg')} alt="abundant mockup" />
            <div className="page-info">
              <p>Founder, Designer & Developer</p>
              <a href="http://freedash.io" alt="freedash.io" target="_blank"><h2>Freedash.io</h2></a>
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}


export default Freedash;

import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Freedash extends Component {
  render(){
    return(

      <div className="freedash page">
        <Fade left>
          <a href="#" alt="freedash.io" target="_blank">
            <span>.003</span>
            <img src={require('../Assets/freedash-mockup.svg')} alt="abundant mockup" />
            <div className="page-info">
              <p>Founder, Designer & Developer</p>
              <h2><b>Freedash.io</b></h2>
            </div>
          </a>
        </Fade>
      </div>

    )
  }
}


export default Freedash;

import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Camuro extends Component {
  render(){
    return(

      <div className="camuro page">
        <Fade left>
          <a href="#" alt="camuro.co" target="_blank">
            <span>.002</span>
            <img src={require('../Assets/camuro-mockup.svg')} alt="camuro mockup" />
            <div className="page-info">
              <p>Co-Founder, Designer & Developer</p>
              <h2><b>Camuro.co</b></h2>
            </div>
          </a>
        </Fade>
      </div>

    )
  }
}


export default Camuro;

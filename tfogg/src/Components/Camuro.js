import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Camuro extends Component {
  render(){
    return(
      <div className="camuro page">
        <Fade left>
          <span>.001</span>
          <img src={require('../Assets/camuro-mockup.svg')} alt="camuro mockup" />
          <div className="page-info">
            <p>Co-Founder, Designer & Developer</p>
            <a href="https://www.camuro.co" alt="camuro.co" target="_blank"><h2>Camuro.co</h2></a>
          </div>
        </Fade>
      </div>
    )
  }
}


export default Camuro;

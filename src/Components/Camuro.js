import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Camuro extends Component {
  render(){
    return(

      <div className="camuro page">
        <Fade left>
          <span>.001</span>
          <img src={require('../Assets/camuro-mockup-4.svg')} alt="camuro mockup" />
          <h2></h2>
          <p></p>
        </Fade>
      </div>

    )
  }
}


export default Camuro;

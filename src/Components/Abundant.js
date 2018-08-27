import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Abundant extends Component {
  render(){
    return(

      <div className="abundant page">
        <Fade left>
          <span>.003</span>
          <img src={require('../Assets/alf-mockup.svg')} alt="abundant mockup" />
          <h2></h2>
          <p></p>
        </Fade>
      </div>

    )
  }
}


export default Abundant;

import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Freedash extends Component {
  render(){
    return(

      <div className="freedash page">
        <Fade left>
          <span>.002</span>
          <img src={require('../Assets/freedash-mockup.svg')} alt="abundant mockup" />
          <h2></h2>
          <p></p>
        </Fade>
      </div>

    )
  }
}


export default Freedash;

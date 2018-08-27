import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Skill extends Component {
  render(){
    return(

      <div className="skill page">
        <Fade left>
          <span>.004</span>
          <div className="icons">
            <div className="icon"><img src={require('../Assets/icons.svg')} alt="skill icons"/></div>
          </div>
        </Fade>
      </div>

    )
  }
}


export default Skill;

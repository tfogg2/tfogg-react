import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Skill extends Component {
  render(){
    return(

      <div className="skill page">
        <Fade left>
          <a href="https://github.com/tfogg2/tfogg-backend" alt="tfogg.com on github" target="_blank">
            <span>.005</span>
            <div className="icons">
              <div className="icon"><img src={require('../Assets/icons.svg')} alt="skill icons"/></div>
            </div>
            <div className="page-info">
              <p>Some of My Skills</p>
              <h2><b>Tfogg.com on Github</b></h2>
            </div>
          </a>
        </Fade>
      </div>

    )
  }
}


export default Skill;

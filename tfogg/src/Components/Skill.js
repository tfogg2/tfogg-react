import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Skill extends Component {
  render(){
    return(
      <div className="skill page">
        <Fade left>
          <div className="display-content">
            <span>.004</span>
            <div className="icons">
              <div className="icon"><img src={require('../Assets/icons.svg')} alt="skill icons"/></div>
            </div>
            <div className="page-info">
              <p>Some of my skills</p>
              <a href="https://github.com/tfogg2/tfogg-backend" alt="tfogg.com on github" target="_blank"><h2>Tfogg.com on Github</h2></a>
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}


export default Skill;

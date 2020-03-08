import React, { Component } from 'react';
import _ from 'lodash'
import Fade from 'react-reveal/Fade'

class Landing extends Component {
  render(){
    return(
      <div className="landing page">
        <Fade left>
          <div className="cta">
            <div className="cta-header">
              <img src={require('../Assets/tfogg-header.svg')} alt="cta header" />
            </div>
            <div className="cta-body">
              <p>I'm a full stack developer working on cool projects with great people. In my spare time, when I can find some, I like to go exploring and document it via photography. See some of my work, skills and photos below.</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/thomas-fogg-95a88313b/" alt="Thomas Fogg LinkedIn" target="_blank"><span className="linkedIn"></span></a>
                <a href="https://www.instagram.com/tfogg2/?hl=en" alt="Thomas Fogg Instagram" target="_blank"><span className="instagram"></span></a>
                <a href="https://github.com/tfogg2" alt="Thomas Fogg Github" target="_blank"><span className="github"></span></a>
              </div>
              <a href="mailto:tfogg2@gmail.com" alt="say hello"><button>Say Hello!</button></a>
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}


export default Landing;

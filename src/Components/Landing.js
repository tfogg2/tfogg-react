import React, { Component } from 'react';
import _ from 'lodash'
import Fade from 'react-reveal/Fade'
import Mailto from 'react-mailto'

class Landing extends Component {
  render(){
    return(

      <div className="landing page">
        <Fade left>
          <div className="cta">
            <div className="cta-header">
              <img src={require('../Assets/cta-header.svg')} alt="cta header" />
            </div>
            <div className="cta-body">
              <p>Thomas Fogg is a full stack developer making beautiful projects with outstanding people. See his work, skills and photos below.</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/thomas-fogg-95a88313b/" alt="Thomas Fogg LinkedIn" target="_blank"><span className="linkedIn"></span></a>
                <a href="https://www.instagram.com/tfogg2/?hl=en" alt="Thomas Fogg Instagram" target="_blank"><span className="instagram"></span></a>
                <a href="https://github.com/tfogg2" alt="Thomas Fogg Github" target="_blank"><span className="github"></span></a>
              </div>
              <Mailto email="foggts@g.cofc.edu" obfuscate={true}>
                <button>Say Hello!</button>
              </Mailto>
            </div>
          </div>
        </Fade>
      </div>

    )
  }
}


export default Landing;

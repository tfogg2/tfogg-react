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
              <img src={require('../Assets/cta-header.svg')} alt="cta header" />
            </div>
            <div className="cta-body">
              <p>Thomas Fogg is a </p>
              <div className="social-icons">
                <img src={require('../Assets/linkedIn-black.svg')} alt="LinkedIn" />
                <img src={require('../Assets/facebook-black.svg')} alt="Facebook" />
                <img src={require('../Assets/instagram-black.svg')} alt="Instagram" />
              </div>
              <button>Say Hello!</button>
            </div>
          </div>
        </Fade>
      </div>

    )
  }
}


export default Landing;

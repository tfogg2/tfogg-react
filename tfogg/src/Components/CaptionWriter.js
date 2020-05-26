import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class CaptionWriter extends Component {
  render(){
    return(

      <div className="captionWriter page">
        <Fade left>
          <a href="https://www.captionwriter.app/" alt="captionwriter.app" target="_blank">
            <span>.001</span>
            <img src={require('../Assets/captionwriter-mockup.svg')} alt="camuro mockup" />
            <div className="page-info">
              <p>Director of Marketing</p>
              <h2><b>Caption Writer</b></h2>
            </div>
          </a>
        </Fade>
      </div>

    )
  }
}


export default CaptionWriter;

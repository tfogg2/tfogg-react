import React, { Component, PropTypes } from 'react';
import Fade from 'react-reveal/Fade'


class Footer extends Component {
  render(){
    return(

      <footer className="footer page">
        <Fade left>
          <span>Created by Thomas Fogg</span>
        </Fade>
      </footer>

    )
  }
}

export default Footer;

import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Abundant extends Component {
  render(){
    return(

      <div className="abundant page">
        <Fade left>
          <a href="#" alt="abundant life foods">
            <span>.004</span>
            <img src={require('../Assets/shopify-mockup.svg')} alt="abundant mockup" />
            <div className="page-info">
              <p>Shopify Developer</p>
              <h2><b>Abundantlifefoods.com</b></h2>
            </div>
          </a>
        </Fade>
      </div>

    )
  }
}


export default Abundant;

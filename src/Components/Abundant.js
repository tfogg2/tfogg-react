import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Abundant extends Component {
  render(){
    return(

      <div className="abundant page">
        <Fade left>
          <span>.003</span>
          <img src={require('../Assets/shopify-mockup.svg')} alt="abundant mockup" />
          <div className="page-info">
            <p>Backend Shopify Developer</p>
            <a href="#" alt="abundant life foods"><h2>Abundantlifefoods.com</h2></a>
          </div>
        </Fade>
      </div>

    )
  }
}


export default Abundant;

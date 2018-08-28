import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Abundant extends Component {
  render(){
    return(

      <div className="abundant page">
        <Fade left>
          <div className="display-content">
            <span>.003</span>
            <img src={require('../Assets/shopify-mockup.svg')} alt="abundant mockup" />
            <div className="page-info">
              <p>Back-End Shopify Developer</p>
              <a href="#" alt="abundant life foods"><h2>Abundantlifefoods.com</h2></a>
            </div>
          </div>
        </Fade>
      </div>

    )
  }
}


export default Abundant;

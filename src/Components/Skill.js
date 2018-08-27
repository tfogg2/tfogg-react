import React, { Component } from 'react';

class Skill extends Component {
  render(){
    return(

      <div className="skill page">
        <div className="icons">
          <div className="icon"><img src={require('../Assets/html-icon.svg')} alt="html" onMouseOver={this.iconHover}/><span>HTML</span></div>
          <div className="icon"><img src={require('../Assets/javascript-icon.svg')} alt="javascript" onMouseOver={this.iconHover}/><span>Javascript</span></div>
          <div className="icon"><img src={require('../Assets/react-icon.svg')} alt="react" onMouseOver={this.iconHover}/><span>React.js</span></div>
          <div className="icon"><img src={require('../Assets/ruby-icon.svg')} alt="ruby" onMouseOver={this.iconHover}/><span>Ruby on Rails</span></div>
          <div className="icon"><img src={require('../Assets/sketch-icon.svg')} alt="sketch" onMouseOver={this.iconHover}/><span>Sketch 3</span></div>
          <div className="icon"><img src={require('../Assets/github-icon.svg')} alt="github" onMouseOver={this.iconHover}/><span>Github</span></div>
          <div className="icon"><img src={require('../Assets/shopify-icon.svg')} alt="shopify" onMouseOver={this.iconHover}/><span>Shopify Partners</span></div>
          <div className="icon"><img src={require('../Assets/bootstrap-icon.svg')} alt="bootstrap" onMouseOver={this.iconHover}/><span>Bootstrap</span></div>
        </div>
      </div>

    )
  }
}


export default Skill;

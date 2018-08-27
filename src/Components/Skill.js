import React, { Component } from 'react';

class Skill extends Component {
  render(){
    return(

      <div className="skill page">
        <span>.004</span>
        <div className="icons">
          <div className="icon"><img src={require('../Assets/icons.svg')} alt="skill icons"/></div>
        </div>
      </div>

    )
  }
}


export default Skill;

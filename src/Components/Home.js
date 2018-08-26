import React, { Component } from 'react';
import _ from 'lodash'

class Home extends Component {
  state = {
    loaded: false
  }
  componentDidMount() {
    _.delay( () => {
      this.setState({
        loaded: true
      })
    }, 200 )
  }

  render(){
    const homeClass = this.state.loaded ? 'home-bg visible' : 'home-bg'
    return(
      <div className="content">
        <div className="landing page">
          <div className="home-cta">
            <h1>Home</h1>
          </div>
          <div className="splash-background">
            <div className={homeClass}></div>
          </div>
        </div>
        <div className="camuro page">
          <img src={require('../Assets/camuro-mockup-4.svg')} alt="camuro mockup" />
        </div>
        <div className="freedash page">
          <img src={require('../Assets/freedash-mockup.svg')} alt="abundant mockup" />
        </div>
        <div className="abundant page">
          <img src={require('../Assets/alf-mockup.svg')} alt="abundant mockup" />
        </div>
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
        <div className="passion page"><img src={require('../Assets/icons.svg')} alt="html" /></div>
        <div className="contact page"></div>
        <footer></footer>
      </div>
    )
  }
}


export default Home;

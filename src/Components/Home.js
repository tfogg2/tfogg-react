import React, { Component } from 'react';
import _ from 'lodash'
import Landing from './Landing'
import Camuro from './Camuro'
import Freedash from './Freedash'
import Abundant from './Abundant'
import Skill from './Skill'
import Passion from './Passion'
import Contact from './Contact'
import Footer from './Footer'

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
        <Landing />
        <Camuro />
        <Freedash />
        <Abundant />
        <Skill />
        <Passion />
        <Contact />
        <Footer />
      </div>

    )
  }
}


export default Home;

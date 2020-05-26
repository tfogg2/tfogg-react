import React, { Component } from 'react';
import _ from 'lodash'
import Landing from './Landing'
import Camuro from './Camuro'
import Freedash from './Freedash'
import Abundant from './Abundant'
import CaptionWriter from './CaptionWriter'
import Skill from './Skill'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'

class Home extends Component {
  render(){
    return(
      <div className="content">
        <Landing />
        <CaptionWriter />
        <Camuro />
        <Freedash />
        <Abundant />
        <Skill />
        <Gallery />
        <Footer />
      </div>
    )
  }
}


export default Home;

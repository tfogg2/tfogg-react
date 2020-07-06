import React from "react"
import _ from "lodash"
import Landing from "./Landing"
import Camuro from "./Camuro"
import Freedash from "./Freedash"
import Abundant from "./Abundant"
import CaptionWriter from "./CaptionWriter"
import Skill from "./Skill"
import Gallery from "./Gallery"
import Footer from "./Footer"

const Home = () => {
  return (
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

export default Home

import React, { Component, useState, useEffect } from "react"
import Axios from "axios"
import LoadingContext from "../LoadingContext"
import _ from "lodash"
import Landing from "./Landing"
import Camuro from "./Camuro"
import Freedash from "./Freedash"
import Abundant from "./Abundant"
import CaptionWriter from "./CaptionWriter"
import Skill from "./Skill"
import Gallery from "./Gallery"
import Contact from "./Contact"
import Footer from "./Footer"

const Home = () => {
  const isLoading = React.useContext(LoadingContext)

  const useEffect = React.useEffect(())


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

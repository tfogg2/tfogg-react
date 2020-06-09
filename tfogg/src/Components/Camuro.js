import React, { Component } from "react"
import Company from "./Company"

class Camuro extends Component {
  render() {
    return <Company n=".002" classN="camuro" role="Co-Founder, Designer & Developer" title="Camuro.co" url="https://www.camuro.co" imgSrc={require("../Assets/camuro-mockup.svg")} />
  }
}

export default Camuro

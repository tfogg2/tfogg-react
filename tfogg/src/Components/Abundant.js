import React, { Component } from "react"
import Fade from "react-reveal/Fade"
import Company from "./Company"

class Abundant extends Component {
  render() {
    return <Company n=".004" classN="abundant" role="Shopify Developer" title="Abundantlifefoods.com" url="https://www.Abundantlifefoods.com" imgSrc={require("../Assets/shopify-mockup.svg")} />
  }
}

export default Abundant

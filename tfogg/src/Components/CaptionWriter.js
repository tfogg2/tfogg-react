import React, { Component } from "react"
import Company from "./Company"

class CaptionWriter extends Component {
  render() {
    return <Company n=".001" classN="captionWriter" role="Director of Marketing" title="Caption Writer" url="https://www.captionwriter.app/" imgSrc={require("../Assets/captionwriter-mockup.svg")} />
  }
}

export default CaptionWriter

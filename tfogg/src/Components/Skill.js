import React, { Component } from "react"
import Company from "./Company"

class Skill extends Component {
  render() {
    return <Company n=".005" classN="skill" role="Some of My Skills" title="Tfogg.com on Github" url="https://github.com/tfogg2/tfogg-react" imgSrc={require("../Assets/icons.svg")} />
  }
}

export default Skill

import React, { Component } from "react"
import Fade from "react-reveal/Fade"

class Company extends Component {
  render() {
    return (
      <div className={this.props.classN + " page"}>
        <Fade left>
          <a href={this.props.url} alt={this.props.title} target="_blank">
            <span>{this.props.n}</span>
            <img src={this.props.imgSrc} alt={this.props.title + " mockup"} />
            <div className="page-info">
              <p>{this.props.role}</p>
              <h2>
                <b>{this.props.title}</b>
              </h2>
            </div>
          </a>
        </Fade>
      </div>
    )
  }
}

export default Company

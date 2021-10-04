import React, { Component } from "react"

import WindGraph from "../Components/WindGraph.js"

import "./Sunshine.css"

import windImage from "../img/windPlain.png"

class Wind extends Component {

    state = {
        temperature : ""
    }

    updateTemperature = (value) => {
      this.setState({
        temperature : value
      })
    }
  
    render() {
      console.log("Called")
      if (this.props.setting === "wind") {
        return (
          <React.Fragment>
            <div id="contentTop">
                <p id="contentTitle"> Wind Speeds </p>
                <img id="contentImg" src={windImage} align="right" alt="Top wind pic"></img>
            </div>
            <div id="graph">
                <WindGraph prevTemperature={this.state.temperature} updateTemperature={this.updateTemperature} />
            </div>
          </React.Fragment>
          )
      } else {
        return (
          <React.Fragment>
          </React.Fragment>
        )
      }
    }
  }
  
  export default Wind;
import React, { Component } from "react"

import PrecipitationGraph from "../Components/PrecipitationGraph.js"

import "./Sunshine.css"

import precipitationImage from "../img/precipitationPlain.png"

class Precipitation extends Component {

    state = {
        temperature : ""
    }

    updateTemperature = (value) => {
      this.setState({
        temperature : value
      })
    }
  
    render() {

      if (this.props.setting === "precipitation") {
        return (
          <React.Fragment>
            <div id="contentTop">
                <p id="contentTitle"> Precipitation </p>
                <img id="contentImg" src={precipitationImage} align="right" alt="Top sunshine pic"></img>
            </div>
            <div id="graph">
                <PrecipitationGraph prevTemperature={this.state.temperature} updateTemperature={this.updateTemperature} />
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
  
  export default Precipitation;
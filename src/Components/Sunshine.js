import React, { Component } from "react"

import SunShineGraph from "../Components/SunshineGraph.js"

import "./Sunshine.css"

import sunshineImage from "../img/sunshinePlain.png"

class Sunshine extends Component {

    state = {
        temperature : ""
    }

    updateTemperature = (value) => {
      this.setState({
        temperature : value
      })
    }
  
    render() {

      if (this.props.setting === "sunshine") {
        return (
          <React.Fragment>
            <div id="contentTop">
                <p id="contentTitle"> Sunshine </p>
                <img id="contentImg" src={sunshineImage} align="right" alt="Top sunshine pic"></img>
            </div>
            <div id="graph">
                <SunShineGraph prevTemperature={this.state.temperature} updateTemperature={this.updateTemperature} />
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
  
  export default Sunshine;
import React, { Component } from "react"

import SunShineGraph from "../Components/SunshineGraph.js"

import "./Sunshine.css"

class Sunshine extends Component {

    state = {
    }

  
    render() {

      if (this.props.setting === "sunshine") {
        return (
          <React.Fragment>
            <div id="contentTop">
                <p id="contentTitle"> Available Sunshine </p>
            </div>
            <div id="graph">
                <SunShineGraph updateTemperature={this.updateTemperature} />
            </div>
          </React.Fragment>
          )
      }
    }
  }
  
  export default Sunshine;
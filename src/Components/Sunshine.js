import React, { Component } from "react"
import SunShineGraph from "../Components/SunshineGraph.js"

class Sunshine extends Component {

    state = {
        
    }
  
    render() {

      if (this.props.setting === "sunshine") {
        return (
          <React.Fragment>
            <div id="contentTop">
                <p id="contentTitle"> Available Sunshine </p>
                <p id="contentValue"> 70 F </p>
            </div>
            <div id="graph">
                <SunShineGraph />
            </div>
          </React.Fragment>
          )
      }
    }
  }
  
  export default Sunshine;
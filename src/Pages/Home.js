import React, { Component } from "react"
import "./Home.css"
import SunShineGraph from "../Components/Sunshine.js"

const axios = require('axios')

class Home extends Component {

  state = {
      
  }

  render() {

    return (
    <React.Fragment>

      <div id="wrapper">
        <div id="content">
          <div id="graph">
            <SunShineGraph />
          </div>
        </div>
        <div id="taskbar">

        </div>

      </div>
        
    </React.Fragment>
    )
  }
}

export default Home;
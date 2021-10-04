import React, { Component } from "react"
import "./Home.css"

import Precipitation from "../Components/Precipitation"
import Sunshine from "../Components/Sunshine.js"
import Wind from "../Components/Wind.js"

import Taskbar from "../Components/Taskbar.js"

class Home extends Component {

  state = {
      setting : "sunshine"
  }

  setSetting = (name) => {
    this.setState({
      setting : name
    })
  }

  render() {

    return (
    <React.Fragment>

      <div id="wrapper">
        <div id="content">
          <div>
            <Sunshine setting={this.state.setting} />
            <Wind setting={this.state.setting} />
            <Precipitation setting={this.state.setting} />
          </div>
        </div>
        <div id="taskbarWrapper">
            <Taskbar setting={this.state.setting} setSetting={this.setSetting} />
        </div>

      </div>
        
    </React.Fragment>
    )
  }
}

export default Home;
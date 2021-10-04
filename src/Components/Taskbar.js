import React, { Component } from "react";

import precipitation from "../img/precipitationPlain.png";
import sunshine from "../img/sunshinePlain.png";
import wind from "../img/windPlain.png";

import "./Taskbar.css";

class Taskbar extends Component {
  
  render() {


    let elem = document.getElementById(this.props.setting)
    let setting = this.props.setting

    if (elem === null) {
    }
    else if (setting === "wind") {
      elem.style.backgroundColor = "rgb(130, 40, 40)"
      document.getElementById("precipitation").style.backgroundColor = "black"
      document.getElementById("sunshine").style.backgroundColor = "black"
    }
    else if (setting === "precipitation") {
      elem.style.backgroundColor = "rgb(70, 140, 200)"
      document.getElementById("wind").style.backgroundColor = "black"
      document.getElementById("sunshine").style.backgroundColor = "black"
    }
    else if (setting === "sunshine") {
      elem.style.backgroundColor = "rgb(210, 125, 25)"
      document.getElementById("precipitation").style.backgroundColor = "black"
      document.getElementById("wind").style.backgroundColor = "black"
    }


    return (
      <React.Fragment>
        <div id="tab">        
            <img className="img" id="precipitation" src={precipitation} alt="precipitation" onClick={() => this.props.setSetting("precipitation")}></img>

            <img className="img" id="sunshine" src={sunshine} alt="sunshine" onClick={() => this.props.setSetting("sunshine")}></img>
            
            <img className="img" id="wind" src={wind} alt="wind" onClick={() => this.props.setSetting("wind")}></img>
        </div>
      </React.Fragment>
    )
  }
}

export default Taskbar;

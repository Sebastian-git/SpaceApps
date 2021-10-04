import React, { Component } from "react";

import precipitation from "../img/precipitationPlain.png";
import sunshine from "../img/sunshinePlain.png";
import wind from "../img/windPlain.png";

import "./Taskbar.css";

class Taskbar extends Component {
  
  render() {

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

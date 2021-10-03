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
            <img className="img" id="precipitation" src={precipitation} alt="precipitation"></img>
            <img className="img" id="sunshine" src={sunshine} alt="sunshine"></img>
            <img className="img" id="wind" src={wind} alt="wind"></img>
        </div>
      </React.Fragment>
    );
  }
}

export default Taskbar;

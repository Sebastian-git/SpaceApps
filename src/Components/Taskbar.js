import React, { Component } from "react";
import "./Taskbar.css"

class Taskbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="tab">
          <button className="button">Percipitation</button>
          <button className="button">Sunshine</button>
          <button className="button">Wind</button>
        </div>

        <div id="Percipitation"></div>

        <div id="Sunshine"></div>

        <div id="Wind"></div>
      </React.Fragment>
    );
  }
}

export default Taskbar;

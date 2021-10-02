import React, { Component } from "react"
import "./Home.css"
import BarGraph from "./Test.js"

class Home extends Component {

  state = {
      
  }

  render() {
    return (
    <React.Fragment>
        <p> Hello world </p>

        <BarGraph />
        
    </React.Fragment>
    )
  }
}

export default Home;
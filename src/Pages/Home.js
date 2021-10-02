import React, { Component } from "react"
import "./Home.css"
import BarGraph from "../Components/Sunshine.js"

class Home extends Component {

  state = {
      
  }

  render() {
    return (
    <React.Fragment>



        <BarGraph />
        
    </React.Fragment>
    )
  }
}

export default Home;
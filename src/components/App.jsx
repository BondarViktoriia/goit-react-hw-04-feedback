import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";

class App extends Component{

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  


  render() {

    // const {good,neutral,bad}=this.state
    return (
      <div>
        <FeedbackOptions options={["good","neutral","bad"]}  />
    </div>
    )
  }
}


export default App;
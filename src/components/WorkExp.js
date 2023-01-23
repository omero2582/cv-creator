import React, { Component } from "react"

class WorkExp extends Component {
  render(){
    return (
     <fieldset>
     <label>Company Name:
      <input></input>
    </label>
    <label>Position Title:
      <input></input>
    </label>
    <label>Start Date:
      <input type='number'></input>
    </label>
    <label>End Date:
      <input type='number'></input>
    </label>
   </fieldset>
    )
   }
   
}

export default WorkExp
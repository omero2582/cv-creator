import React, { Component } from "react"

class Education extends Component {
  render(){
    return (
     <fieldset>
     <label>School Name:
      <input></input>
     </label>
     <label>Title of Study:
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

export default Education
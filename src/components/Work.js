import React, { Component } from "react"

class Work extends Component {
  /*companyName: '',
    positionTitle:'',
    mainTasks:'',
    startDate: '',
    endDate: '', */
  render(){
    const { info, onInput, onDelete } = this.props;
    return (
     <fieldset>
     <label>Company Name:
      <input value={info.companyName} onChange={(e) => onInput(e, info.id, 'companyName')}></input>
    </label>
    <label>Position Title:
      <input value={info.positionTitle} onChange={(e) => onInput(e, info.id, 'positionTitle')}></input>
    </label>
    <label>Start Date:
      <input type='date' value={info.startDate} onChange={(e) => onInput(e, info.id, 'startDate')}></input>
    </label>
    <label>End Date:
      <input type='date' value={info.endDate} onChange={(e) => onInput(e, info.id, 'endDate')}></input>
    </label>
    <button type='button' onClick={() => onDelete(info.id)}>Delete</button>
   </fieldset>
    )
   }
}

export default Work
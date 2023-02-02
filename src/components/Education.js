import React, { Component } from "react"

class Education extends Component {
  /*educationNew = {
    id: crypto.randomUUID(),
    schoolName: '',
    titleOfStudy: '',
    startDate: '',
    endDate: '',
  }; */
  render(){
    const {info, onInput, onDelete} = this.props;
    return (
     <fieldset>
     <label>School Name:
      <input value={info.schoolName} onChange={(e) => onInput(e, info.id, 'schoolName')}></input>
     </label>
     <label>Title of Study:
      <input value={info.titleOfStudy} onChange={(e) => onInput(e, info.id, 'titleOfStudy')}></input>
     </label>
     <label>Start Date:
      <input type='number' value={info.startDate} onChange={(e) => onInput(e, info.id, 'startDate')}></input>
     </label>
     <label>End Date:
      <input type='number' value={info.endDate} onChange={(e) => onInput(e, info.id, 'endDate')}></input>
     </label>
     <button type='button' onClick={() => onDelete(info.id)}>Delete</button>
   </fieldset>
    )
   }
   
}

export default Education
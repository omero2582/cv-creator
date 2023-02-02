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
      <input type='number' value={info.startDate} onChange={(e) => onInput(e, info.id, 'startDate')}></input>
    </label>
    <label>End Date:
      <input type='number' value={info.endDate} onChange={(e) => onInput(e, info.id, 'endDate')}></input>
    </label>
    <button type='button' onClick={() => onDelete(info.id)}>Delete</button>
   </fieldset>
    )
   }
   // TODO TODO. Now that I look at it, Education and Work both look the same... maybe even General too
   // But I could probably just write 1 component, and make a Work and an Education out of that 1 component
   // I dont know if I coould also include General in there

   // Also the only possible problem is all the props that I would have to pass down.....
}

export default Work
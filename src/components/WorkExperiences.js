import React, {Component} from "react";
import Work from "./Work";

class WorkExperiences extends Component {
  render(){
    const {workArr, onInput, onNew, onDelete} = this.props;
    return (
      <fieldset>
        <legend>Work Experiences</legend>
        {workArr.map((work) => <Work key={work.id} info={work} onInput={onInput} onDelete={onDelete}/>)}
        <button type='button' onClick={onNew}>New Experience</button>
      </fieldset>
    )
  }
}

export default WorkExperiences
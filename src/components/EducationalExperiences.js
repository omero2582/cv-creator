import React, {Component} from "react";
import Education from "./Education";

class EducationalExperiences extends Component {
  render(){
    const {educationArr, onInput, onNew, onDelete} = this.props;
    return (
      <fieldset>
        <legend>Educational Experiences</legend>
        {educationArr.map((education) => {
          return <Education key={education.id} info={education} onInput={onInput} onDelete={onDelete}/> 
        })}
        <button type='button' onClick={onNew}>New Experience</button>
      </fieldset>
    )
  }
}

export default EducationalExperiences
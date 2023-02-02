import React, {Component} from 'react'
import General from './General';
import EducationalExperiences from './EducationalExperiences';
import WorkExperiences from './WorkExperiences';

class CvInput extends Component {
  render() {
    const {
      cv,
      onSubmit,
      onInputGeneral,
      educationFunctions,
      workFunctions,
      // onInputEducation,
      // onNewEducation,
      // onDeleteEducation,
      // onInputWork,
      // onNewWork,
      // onDeleteWork,
      
    }= this.props;
    return (
      <form className='cv-input' onSubmit={onSubmit}>
          <General  general= {cv.general} onInput={onInputGeneral}/>
          <EducationalExperiences educationArr={cv.educationArr} {...educationFunctions}/>
          <WorkExperiences workArr={cv.workArr} {...workFunctions}/>
          <button>Submit</button>
        </form>
    )
  }
}

export default CvInput
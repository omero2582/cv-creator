import React, {Component} from 'react'
import General from './General';
import EducationalExperiences from './EducationalExperiences';
import WorkExperiences from './WorkExperiences';

class CvInput extends Component {
  render() {
    const {
      cv,
      onSubmit,
      generalActions,
      educationActions,
      workActions,    
    }= this.props;
    return (
      <form className='cv-input' onSubmit={onSubmit}>
        <General general={cv.general} {...generalActions}/>
        <EducationalExperiences educationArr={cv.educationArr} {...educationActions}/>
        <WorkExperiences workArr={cv.workArr} {...workActions}/>
        <button>Submit</button>
      </form>
    )
  }
}

export default CvInput
import React, {Component} from 'react'
import EducationExp from './EducationExp';
import WorkExp from './WorkExp';

class CvInput extends Component {
  render() {
    // TODO TODO ... after  perfecting my input handler function, i now realize
    // that I will need something different for schoolExps and workExps, since they are arrays
    const {cv, onSubmit, onInput, onNewEdu, onNewWork} = this.props;
    return (
      <form className='cv-input' onSubmit={onSubmit}>
          <fieldset>
            <legend>General</legend>
            <label>Name:
              <input value={cv.general.name} onChange={(e) => onInput(e, 'general.name')}></input>
            </label>
            <label>Email:
              <input type='email' value={cv.general.email} onChange={(e) => onInput(e, 'general.email')}></input>
            </label>
            <label>Phone #:
              <input type='tel' value={cv.general.phone} onChange={(e) => onInput(e, 'general.phone')}></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Educational Experiences</legend>
            {cv.educationExps.map((exp) => <EducationExp key={exp.id}/>)}
            <button type='button' onClick={onNewEdu}>New Experience</button>
          </fieldset>
          <fieldset>
            <legend>Work Experiences</legend>
            {cv.workExps.map((exp) => <WorkExp key={exp.id}/>)}
            <button type='button' onClick={onNewWork}>New Experience</button>
          </fieldset>
          <button>Submit</button>
        </form>
    )
  }
}

export default CvInput
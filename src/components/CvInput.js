import React, {Component} from 'react'
import EducationalExp from './EducationalExp';
import WorkExp from './WorkExp';

class CvInput extends Component {
  render() {
    // TODO TODO ... after  perfecting my input handler function, i now realize
    // that I will need something different for schoolExps and workExps, since they are arrays
    const {cv, onSubmit, input, newEd} = this.props;
    return (
      <form className='cv-input' onSubmit={onSubmit}>
          <fieldset>
            <legend>General</legend>
            <label>Name:
              <input value={cv.general.name} onChange={(e) => input(e, 'general.name')}></input>
            </label>
            <label>Email:
              <input type='email' value={cv.general.email} onChange={(e) => input(e, 'general.email')}></input>
            </label>
            <label>Phone #:
              <input type='tel' value={cv.general.phone} onChange={(e) => input(e, 'general.phone')}></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Educational Experiences</legend>
            {cv.educationalExps.map((exp) => <EducationalExp key={exp.id}/>)}
            <button type='button' onClick={newEd}>New Experience</button>
          </fieldset>
          <fieldset>
            <legend>Work Experiences</legend>
            {cv.workExps.map((exp) => <WorkExp key={exp.id}/>)}
            <button type='button'>New Experience</button>
          </fieldset>
          <button>Submit</button>
        </form>
    )
  }
}

export default CvInput
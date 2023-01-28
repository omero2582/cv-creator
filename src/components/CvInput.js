import React, {Component} from 'react'
import General from './General';
import Education from './Education';
import Work from './Work';

class CvInput extends Component {
  render() {
    // TODO TODO ... after  perfecting my input handler function, i now realize
    // that I will need something different for schoolExps and workArr, since they are arrays
    const {cv, onSubmit, onInputGeneral, onNewEducation, onNewWork, onInputEducation, onInputWork, onDeleteWork} = this.props;
    return (
      <form className='cv-input' onSubmit={onSubmit}>
          <General  general = {cv.general} onInput={onInputGeneral}/>
          <fieldset>
            <legend>Educational Experiences</legend>
            {cv.educationArr.map((education) => {
             return <Education key={education.id} info={education} onInput={onInputEducation}/> 
            })}
            <button type='button' onClick={onNewEducation}>New Experience</button>
          </fieldset>
          <fieldset>
            <legend>Work Experiences</legend>
            {cv.workArr.map((work) => <Work key={work.id} info={work} onInput={onInputWork} onDelete={onDeleteWork}/>)}
            <button type='button' onClick={onNewWork}>New Experience</button>
          </fieldset>
          <button>Submit</button>
        </form>
    )
  }
}

export default CvInput
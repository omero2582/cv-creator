import React, {Component} from 'react'

class CvInput extends Component {
  render() {
    // TODO TODO ... after  perfecting my input handler function, i now realize
    // that I will need something different for schoolExp and workExp, since they are arrays
    const {cv, onSubmit, input} = this.props;
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
            <legend>Educational Experience</legend>
            <label>School Name:
              <input></input>
            </label>
            <label>Title of Study:
              <input></input>
            </label>
            <label>Start Date:
              <input type='number'></input>
            </label>
            <label>End Date:
              <input type='number'></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Work Experience</legend>
            <label>Company Name:
              <input></input>
            </label>
            <label>Position Title:
              <input></input>
            </label>
            <label>Start Date:
              <input type='number'></input>
            </label>
            <label>End Date:
              <input type='number'></input>
            </label>
          </fieldset>
          <button>Submit</button>
        </form>
    )
  }
}

export default CvInput
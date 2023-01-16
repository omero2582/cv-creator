import React, {Component} from 'react'

class CvInput extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <form className='cv-input' onSubmit={onSubmit}>
          <fieldset>
            <legend>General</legend>
            <label>Name:
              <input></input>
            </label>
            <label>Email:
              <input type='email'></input>
            </label>
            <label>Phone #:
              <input type='tel'></input>
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
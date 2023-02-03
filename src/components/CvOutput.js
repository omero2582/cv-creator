import React, { Component } from "react";
import { formatDistanceStrict, isDate, isValid } from "date-fns";

class CvOutput extends Component {
  getDateDifference = (startDate, endDate) => {
    const start = new Date(`${startDate}T00:00:00`);
    const end = new Date(`${endDate}T00:00:00`);
    if (isValid(end) && isValid(start)){
      return formatDistanceStrict(start, end)      
    }
  }
  render() {
    const { cv } = this.props;
    return (
      <div className='cv output' style={{whiteSpace: 'pre-wrap'}}>
        {/* {JSON.stringify(cv, null, 2)} */}
        <div className="general">
          <p>{cv.general.name}</p>
          <p>{cv.general.email}</p>
          <p>{cv.general.phone}</p>
        </div>
        <div className="educationalExperiences">
          {cv.educationArr.map((education) => {
            const {id, titleOfStudy, schoolName, startDate, endDate} = education;
            return (
            <React.Fragment key={id}>
              <p>{titleOfStudy}</p>
              <p>{schoolName}</p>
              <p>{startDate} - {this.getDateDifference(startDate, endDate)}</p>
              <p>{endDate}</p>
            </React.Fragment>
            )
          })}
        </div>
        <div className="workExperiences">
        {cv.workArr.map((work) => (
            <React.Fragment key={work.id}>
              <p>{work.companyName}</p>
              <p>{work.positionTitle}</p>
              <p>{work.startDate}</p>
              <p>{work.endDate}</p>
              <p>mainTasksPLACEHOLDER{work.mainTasks}</p>
              </React.Fragment>
          ))}
        </div>
      </div>
    )
  }
}

export default CvOutput

/*educationNew = {
    id: crypto.randomUUID(),
    schoolName: '',
    titleOfStudy: '',
    startDate: '',
    endDate: '',
  }; */

  /*companyName: '',
    positionTitle:'',
    mainTasks:'',
    startDate: '',
    endDate: '', */
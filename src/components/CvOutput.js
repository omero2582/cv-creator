import React, { Component } from "react";

class CvOutput extends Component {
  render() {
    const { cv } = this.props;
    return (
      <div className='cv-output' style={{'white-space': 'pre-wrap'}}>
        {JSON.stringify(cv, null, 2)}
      </div>
    )
  }
}

export default CvOutput
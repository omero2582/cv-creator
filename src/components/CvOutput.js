import React, { Component } from "react";

class CvOutput extends Component {
  render() {
    const { cv } = this.props;
    return (
      <div className='cv-output' style={{whiteSpace: 'pre-wrap'}}>
        {JSON.stringify(cv, null, 2)}
      </div>
    )
  }
}

export default CvOutput
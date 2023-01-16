import './App.css';
import React, {Component} from 'react';
import CvInput from './components/CvInput';
import CvOutput from './components/CvOutput';
class App extends Component {
  constructor (props) {
    super(props);
    // i think extract everything, so that it is outside cv..
    // and there is no 'cv'. Bc i dont think its necessary here
    this.state = {
      cv: {
        general: {
          name: '',
          email: '',
          phone: '',
        },
        educationalExperience: [
          {
            schoolName: '',
            titleOfStudy: '',
            startDate: '',
            endDate: '',
          } 
        ],
        workExperience: [
          {
            companyName: '',
            positionTitle:'',
            mainTasks:'',
            startDate: '',
            endDate: '',
          }
        ]
      }
    };
  }

  submitCv = (e) => {
    e.preventDefault();
    console.log('test');
  };

  // having to write 12 of these seems like is wrong...
  inputName = (e, nameIn) => {
    this.setState((state) => ({
      cv: {
        ...state.cv,
        general: {
          ...state.cv.general,
          name: nameIn,
        }
      }
    }))
  };

  render() {
    return (
      <div className="App">
        <CvInput onSubmit = {this.submitCv}/>
        <CvOutput cv={this.state.cv}/>
      </div>
    );
  }
}

export default App;

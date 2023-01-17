import './App.css';
import React, {Component} from 'react';
import CvInput from './components/CvInput';
import CvOutput from './components/CvOutput';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      general: {
        name: '',
        email: '',
        phone: '',
      },
      eduExperience: [
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
    };
  }

  submitCv = (e) => {
    e.preventDefault();
    console.log('test');
  };

  // having to write 12 of these seems like is wrong...
  input= (e, property) => {
    // const property = 'general.name';
    const [prop1, prop2] = property.split('.');
    this.setState((state) => {
      // const newProp1 = {...state[prop1]};
      // newProp1[prop2] = e.target.value;
      // return {...state, [prop1]: newProp1}
      
      // --- method 2 BETTER --- NOW USING THIS WOKRING PERFECTLY
      // HOWEVER, i now noticed this will only work for general...
      // since workExp and schoolExp are arrays
      return  {
        [prop1]: {
          ...state[prop1],
          [prop2]: e.target.value,
        }
      }
    })
  };

  render() {
    return (
      <div className="App">
        <CvInput cv={this.state} onSubmit={this.submitCv} input={this.input}/>
        <CvOutput cv={this.state}/>
      </div>
    );
  }
}

export default App;

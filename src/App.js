import './App.css';
import React, {Component} from 'react';
import CvInput from './components/CvInput';
import CvOutput from './components/CvOutput';

class App extends Component {
  newEduExp = {
    id: crypto.randomUUID(),
    schoolName: '',
    titleOfStudy: '',
    startDate: '',
    endDate: '',
  };
  state = {
      general: {
        name: '',
        email: '',
        phone: '',
      },
      // newEduExp: {
      //   id: crypto.randomUUID(),
      //   schoolName: '',
      //   titleOfStudy: '',
      //   startDate: '',
      //   endDate: '',
      // },
      educationalExps: [{...this.newEduExp}],
      newWorkExp: {
        id: crypto.randomUUID(),
        companyName: '',
        positionTitle:'',
        mainTasks:'',
        startDate: '',
        endDate: '',
      },
      workExps: []
    };

    neweducationalExp = () => {
      const newExp = {...this.newEduExp, id: crypto.randomUUID()};
      this.setState((state) => 
        ({
          educationalExps: [...state.educationalExps, newExp]
        }));
    };

  // below is using ComponentDidMount... think i WONT use this bc React18 wants
  // components to be remountable at any point... so intial state code should NOT
  // be there... instead rn i am using class field on top
  // neweducationalExp = (e, initialState = false) => {
  //   this.setState((state) => 
  //     ({
  //       educationalExps: initialState ?
  //                       [state.newEduExp]
  //                     : [...state.educationalExps, state.newEduExp],
  //       newEduExp: {...state.newEduExp, id: crypto.randomUUID()},
  //     }));
  // };

  // neweducationalExp = () => {
  //   this.setState((state) => 
  //     ({
  //       educationalExps: [...state.educationalExps, state.newEduExp],
  //       newEduExp: {...state.newEduExp, id: crypto.randomUUID()},
  //     }));
  // };

  submitCv = (e) => {
    e.preventDefault();
    console.log('test');
  };

  componentDidMount() {
    console.log('mount ' + new Date().toLocaleTimeString());
    //this.neweducationalExp(true, true);
    // Doing it this way bc componentDidMount gets called twice because of <StrictMode>,
    // which we can disable... but then what is the point of strict mode if we are just disabling
  }

  // having to write 12 of these seems like is wrong...
  input = (e, property) => {
    // const property = 'general.name';
    const [prop1, prop2] = property.split('.');
    this.setState((state) => {
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
        <CvInput cv={this.state} onSubmit={this.submitCv} input={this.input} newEd ={this.neweducationalExp}/>
        <CvOutput cv={this.state}/>
      </div>
    );
  }
}

export default App;

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
  newWorkExp = {
    id: crypto.randomUUID(),
    companyName: '',
    positionTitle:'',
    mainTasks:'',
    startDate: '',
    endDate: '',
  };

  state = {
    general: {
      name: '',
      email: '',
      phone: '',
    },
    educationExps: [{...this.newEduExp}],
    workExps: [{...this.newWorkExp}]
  };

  handleNewEducationExp = () => {
    const newExp = {...this.newEduExp, id: crypto.randomUUID()};
    this.setState((state) => 
      ({
        educationExps: [...state.educationExps, newExp]
      }));
  };

  handleNewWorkExp = () => {
    const newExp = {...this.newWorkExp, id: crypto.randomUUID()};
    this.setState((state) => 
      ({
        workExps: [...state.workExps, newExp]
      }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('test');
  };

  componentDidMount() {
    console.log('mount ' + new Date().toLocaleTimeString());
    // componentDidMount gets called twice because of <StrictMode>,
    // which we can disable... but then what is the point of strict mode if we are just disabling
  }

  // having to write 12 of these seems like is wrong...
  handleInput = (e, property) => {
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
        <CvInput
          cv={this.state}
          onSubmit={this.handleSubmit}
          onInput={this.handleInput}
          onNewEdu={this.handleNewEducationExp}
          onNewWork={this.handleNewWorkExp}
          />
        <CvOutput cv={this.state}/>
      </div>
    );
  }
}

export default App;

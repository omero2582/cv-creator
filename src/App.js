import './App.css';
import React, {Component} from 'react';
import CvInput from './components/CvInput';
import CvOutput from './components/CvOutput';

class App extends Component {
  educationNew = {
    id: crypto.randomUUID(),
    schoolName: '',
    titleOfStudy: '',
    startDate: '',
    endDate: '',
  };
  workNew = {
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
    educationsArr: [{...this.educationNew}],
    workArr: [{...this.workNew}]
  };

  handleNewEducation = () => {
    const newEdu = {...this.educationNew, id: crypto.randomUUID()};
    this.setState((state) => 
      ({
        educationsArr: [...state.educationsArr, newEdu]
      }));
  };

  handleNewWork = () => {
    const newExp = {...this.workNew, id: crypto.randomUUID()};
    this.setState((state) => 
      ({
        workArr: [...state.workArr, newExp]
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
    // TODO TODO, will take out the necessity to write 'general.abc', since we can only use
    // this function for general. So simply expect 'abc' in parameter instead of 'general.abc'
  };

  handleInputWorkEducation = (e,  id, workOrEducation, prop1) => {
    // for work or education inputs
    const arr  = workOrEducation === 'work' ? 'workArr' : 'educationsArr';
    this.setState((state) => {
      return  {
        [arr]: state[arr].map((item) => {
          if (item.id !== id) {
            return item
          }
          return {
            ...item,
            [prop1]: e.target.value,
          };
        }),
      };
    });
    /* Works perfectly, but HMMM... maybe there is a simpler/more readable way to write this...
      if I use .map like i am, then Im 99% sure HAVE TO do it this exact way
      I wouldn't be able to write .map((item) => (item.id !== id) ? item : newObj)
      since that newObj uses item... but maybe i can just write instead of newObj:
      {
        ...item,
        [prop1]: e.target.value,
      }
    nahhhh, this would defeat the purpose of using ternary operator... whole point of using it over if/else
    is to get it all in one line. Guess im stuck with if else.
    
    2. Other option is to use .findIndex and 2 slices or array spread operator. But the problem with this
    is Im pretty sure I would loop through the array at least 1 extra time, compared to .map()...
    I think I need to just write the code for this method, and then compare how it to .map(). Thats the best
    way to tell if its good bc its hard to keep imagine it in my head perfectly
    */
  };

  handleInputWork = (e, id, prop1) => this.handleInputWorkEducation(e, id, 'work', prop1);
  handleInputEducation = (e, id, prop1) => this.handleInputWorkEducation(e, id, 'education', prop1);

  render() {
    return (
      <div className="App">
        <CvInput
          cv={this.state}
          onSubmit={this.handleSubmit}
          onInput={this.handleInput}
          onInputWork={this.handleInputWork}
          onInputEducation={this.handleInputEducation}
          onNewEducation={this.handleNewEducation}
          onNewWork={this.handleNewWork}
          />
        <CvOutput cv={this.state}/>
      </div>
    );
  }
}

export default App;

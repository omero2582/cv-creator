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
    educationArr: [{...this.educationNew}],
    workArr: [{...this.workNew}]
  };

  handleNewEducation = () => {
    this.setState((state) => ({
        educationArr: [
          ...state.educationArr,
          {...this.educationNew, id: crypto.randomUUID()}
        ]
      }));
  };

  // handleNewWorkOld = () => {
  //   const newExp = {...this.workNew, id: crypto.randomUUID()};
  //   this.setState((state) => ({
  //       workArr: [...state.workArr, newExp]
  //     }));
  // };

  handleNewWork = () => {
    this.setState((state) => ({
        workArr: [
          ...state.workArr,
          {...this.workNew, id: crypto.randomUUID()}
        ]
      }));
  };
  // TODO generalize handleNewWork and handleNewEducation. They are both simply adding
  // a copy of an object to an array in state, so just generalize with 2 parameters

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('test');
  };

  // for inputs in general
  handleInputObj = (e, objName, prop1) => {
    this.setState((state) => {
      return  {
        [objName]: {
          ...state[objName],
          [prop1]: e.target.value,
        }
      }
    })
  };

  // updateArray = (array, id, prop1, value) => {
  //   const itemIndex = array.findIndex(item => item.id === id);
  //   return [
  //     ...array.slice(0, itemIndex),
  //     { ...array[itemIndex], [prop1]: value },
  //     ...array.slice(itemIndex + 1)
  //   ];
  // };
  //

  updateArray = (array, id, prop1, value) => (
    array.map((item) => {
      if (item.id !== id) {
        return item
      }
      return {
        ...item,
        [prop1]: value,
      }
    })
  )

  handleInputArr = (e, arrName, id, prop1) => {
    console.log(arrName);
    this.setState((state) => ({
      [arrName]: this.updateArray(state[arrName], id, prop1, e.target.value)
    }));
  }

  handleDeleteArr = (arrName, id,) => {
    this.setState((state) => {
      return {
        [arrName]: state[arrName].filter(obj => obj.id !== id)
      }
    })
  };

  handleInputGeneral = (e, prop1) => this.handleInputObj(e, 'general', prop1);
  handleInputEducation = (e, id, prop1) => this.handleInputArr(e, 'educationArr', id, prop1);
  handleInputWork = (e, id, prop1) => this.handleInputArr(e, 'workArr',  id, prop1);
  handleDeleteEducation = (id) => this.handleDeleteArr('educationArr', id);
  handleDeleteWork = (id) => this.handleDeleteArr('workArr', id);
  // TODO. Remove these above, and simple write the contents into the grouped variables
  // like 'educationFunctions' below. This was only useful before, when we didnt have the grouped vars

  render() {
    const educationFunctions = {
      onInput: this.handleInputEducation,
      onNew: this.handleNewEducation,
      onDelete: this.handleDeleteEducation,
    };
    const workFunctions = {
      onInput: this.handleInputWork,
      onNew: this.handleNewWork,
      onDelete: this.handleDeleteWork,
    };
    
    return (
      <div className="App">
        <CvInput
          cv={this.state}
          onSubmit={this.handleSubmit}
          onInputGeneral={this.handleInputGeneral}
          educationFunctions={educationFunctions}
          workFunctions={workFunctions}

          // onInputWork={this.handleInputWork}
          // onNewWork={this.handleNewWork}
          // onDeleteWork={this.handleDeleteWork}
          // onInputEducation={this.handleInputEducation}
          // onNewEducation={this.handleNewEducation}
          // onDeleteEducation={this.handleDeleteEducation}
          
          />
        <CvOutput cv={this.state}/>
      </div>
    );
  }
}

export default App;

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


  handleSubmit = (e) => {
    e.preventDefault();
    console.log('test');
  };

  // update object property in state
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
    // In 'array', update the value of object property 'prop1', if object.id == id
    array.map((object) => {
      if (object.id !== id) {
        return object
      }
      return {
        ...object,
        [prop1]: value,
      }
    })
  )

  handleInputArr = (e, arrName, id, prop1) => {
    this.setState((state) => ({
      [arrName]: this.updateArray(state[arrName], id, prop1, e.target.value)
    }));
  }

  handleNew = (arrName, obj) => {
    // adds a copy of obj into state[arrName], and gives obj a new obj.id
    this.setState((state) => ({
      [arrName]: [
        ...state[arrName],
        {...obj, id: crypto.randomUUID()}
      ]
    }));
  };

  handleDeleteArr = (arrName, id,) => {
    this.setState((state) => ({
        [arrName]: state[arrName].filter(obj => obj.id !== id)
      }))
  };

  render() {
    const generalActions = {
      onInput: (e, prop1) => this.handleInputObj(e, 'general', prop1),
    }
    const educationActions = {
      onInput: (e, id, prop1) => this.handleInputArr(e, 'educationArr', id, prop1),
      onNew: () => this.handleNew('educationArr', this.educationNew),
      onDelete: (id) => this.handleDeleteArr('educationArr', id),
    };
    const workActions = {
      onInput: (e, id, prop1) => this.handleInputArr(e, 'workArr',  id, prop1),
      onNew: () => this.handleNew('workArr', this.workNew),
      onDelete: (id) => this.handleDeleteArr('workArr', id),
    };
    
    return (
      <div className="App">
        <CvInput
          cv={this.state}
          onSubmit={this.handleSubmit}
          generalActions={generalActions}
          educationActions={educationActions}
          workActions={workActions}
        />
        <CvOutput cv={this.state}/>
      </div>
    );
  }
}

export default App;

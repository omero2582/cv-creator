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
    const newEdu = {...this.educationNew, id: crypto.randomUUID()};
    this.setState((state) => 
      ({
        educationArr: [...state.educationArr, newEdu]
      }));
  };

  handleNewWork = () => {
    const newExp = {...this.workNew, id: crypto.randomUUID()};
    this.setState((state) => 
      ({
        workArr: [...state.workArr, newExp]
      }));
  };
  // TODO these 2 above functions look the same, I should extract into a general fn maybe probably

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

  // handleInputArr = (e, arrName, id, prop1) => {
  //   // for work or education arrays
  //   this.setState((state) => {
  //     return  {
  //       [arrName]: state[arrName].map((item) => {
  //         if (item.id !== id) {
  //           return item
  //         }
  //         return {
  //           ...item,
  //           [prop1]: e.target.value,
  //         };
  //       }),
  //     };
  //   });
  // };

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

  render() {
    return (
      <div className="App">
        <CvInput
          cv={this.state}
          onSubmit={this.handleSubmit}
          onInputGeneral={this.handleInputGeneral}
          onInputWork={this.handleInputWork}
          onInputEducation={this.handleInputEducation}
          onNewEducation={this.handleNewEducation}
          onNewWork={this.handleNewWork}
          onDeleteEducation={this.handleDeleteEducation}
          onDeleteWork={this.handleDeleteWork}
          />
        <CvOutput cv={this.state}/>
      </div>
    );
  }
}

export default App;

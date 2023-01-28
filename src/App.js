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

  handleInputArr2 = (e, id, arrName, prop1) => {
    const updateArray = (array, id, prop1, value) => {
      const itemIndex = array.findIndex(item => item.id === id);
      return [
        ...array.slice(0, itemIndex),
        { ...array[itemIndex], [prop1]: value },
        ...array.slice(itemIndex + 1)
      ];
    };
  
    this.setState(state => ({
      [arrName]: updateArray(state[arrName], id, prop1, e.target.value)
    }));
  }

  handleInputArr3 = (e, id, arrName, prop1) => {
    this.setState(state => {
      const itemIndex = state[arrName].findIndex(item => item.id === id);
      return {
        [arrName]: [
          ...state[arrName].slice(0, itemIndex),
          { ...state[arrName][itemIndex], [prop1]: e.target.value },
          ...state[arrName].slice(itemIndex + 1)
        ]
      }
    });
  }

  handleInputArr4 = (e,  id, arrName, prop1) => {
    // for work or education arrays
    this.setState((state) => {
      const newArray = state[arrName].map((item) => {
        if (item.id !== id) {
          return item
        }
        return {
          ...item,
          [prop1]: e.target.value,
        };
      });
      return  {
        [arrName]: newArray 
      }
    });
  }

  handleInputArr5 = (e,  id, arrName, prop1) => {
    // for work or education arrays
    this.setState((state) => {
      return ({
        [arrName]: state[arrName].map((item) => (item.id !== id) 
        ? item 
        : {
          ...item,
          [prop1]: e.target.value,
        })
      })
    });
  }

    handleInputArr = (e,  id, arrName, prop1) => {
      // for work or education arrays
      this.setState((state) => {
        return  {
          [arrName]: state[arrName].map((item) => {
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

  handleDeleteArr = (id, arrName) => {
    this.setState((state) => {
      return {
        [arrName]: state[arrName].filter(obj => obj.id !== id)
      }
    })
  };

  handleInputGeneral = (e, prop1) => this.handleInputObj(e, 'general', prop1);
  handleInputEducation = (e, id, prop1) => this.handleInputArr(e, id, 'educationArr', prop1);
  handleInputWork = (e, id, prop1) => this.handleInputArr(e, id, 'workArr', prop1);
  handleDeleteEducation = (id) => this.handleDeleteArr(id, 'educationArr');
  handleDeleteWork = (id) => this.handleDeleteArr(id, 'workArr');

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

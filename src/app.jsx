import React, { PureComponent } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import './app.css';


class App extends PureComponent {
  state = {
    habits: [
        {id : 1, name : 'Reading', count :0},
        {id : 2, name : 'Running', count :0},
        {id : 3, name : 'Coding', count :0}
    ],
}

handleIncrement = (habit)=>{

  const habits = this.state.habits.map(item=>{
    if(item.id===habit.id){
      return {...habit, count: habit.count + 1} //새로운 오브젝트가 만들어짐
    }
    return item
  })
    this.setState({habits})
  }
  // const habits = [...this.state.habits]; //배열에 state를 직접 수정하지 않기위해 껍데기를 만들어옴
  // const index = habits.indexOf(habit)
  // habits[index].count++
  // this.setState({habits:habits}) //state안에있는 habits의 key는 새롭게 만든 껍데기 배열
// }

handleDecrement = (habit)=>{
  // const habits = [...this.state.habits];
  // const index = habits.indexOf(habit)
  // const check = habits[index].count - 1
  // habits[index].count = check < 0 ? 0 : check; 
  // this.setState({habits:habits})}
  const habits = this.state.habits.map(item=>{
    if(item.id===habit.id){
      const count = habit.count -1
      return {...habit, count: count <0 ? 0 :count} //새로운 오브젝트가 만들어짐
    }
    return item
  })
    this.setState({habits})
  }

handleDelete = (habit)=>{
  const habits = this.state.habits
  const array = habits.filter((elem)=>{return elem.id !== habit.id})
  this.setState({habits:array})
}

handleAdd = (name)=>{
  const habits = [...this.state.habits,{id: Date.now(),name:name,count:0}]
  this.setState({habits:habits})
}

handleReset = ()=>{
  const habits = this.state.habits.map(habit => {

    if(habit.count !==0){
      return {...habit, count:0}
      
    }
    return habit
  })
  this.setState({habits})
}

  render() {
    console.log('App')
    return (
      <>
      <Navbar
      totalCount = {this.state.habits.filter((elem)=>{return elem.count > 0}).length}
      >
      </Navbar>
      <Habits
      habits={this.state.habits}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onAdd={this.handleAdd}
      onReset = {this.handleReset}
      >
      </Habits>
      </>
    );
  }
}

export default App;
import React, { Component, useRef } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    handleIncrement = (habit)=>{ //내가 지금 클릭하고있는 그 value배열
        this.props.onIncrement(habit)
    }
    handleDecrement = (habit)=>{
        this.props.onDecrement(habit)
    }

    handleDelete = (habit)=>{
        this.props.onDelete(habit)
    }
    handleAdd = (name)=> {
        this.props.onAdd(name)
    }


    render() { //어떻게 화면으로 보여줄것인가.
       console.log('habits/resetAllbtn')
        return(
            <>
            <HabitAddForm onAdd={this.handleAdd}>
            </HabitAddForm>
            <ul>
            {this.props.habits.map(value=>
            <Habit 
            key={value.id} 
            habit={value}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            ></Habit>
           
            )}
            </ul>

            <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        )
    }
}

export default Habits;
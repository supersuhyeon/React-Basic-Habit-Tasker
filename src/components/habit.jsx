import React, { Component } from 'react';

class Habit extends Component {

    constructor(props){
        super(props)
        this.testRef = React.createRef()
    }

    componentDidMount(){
        this.scrollToElememt()
    }

    handleIncrement = ()=>{
        this.props.onIncrement(this.props.habit)
    }
    handleDecrement = ()=>{
        this.props.onDecrement(this.props.habit)
    }

    handleDelete = ()=>{
        this.props.onDelete(this.props.habit)
    }

    scrollToElememt = ()=>{
        this.testRef.current.scrollIntoView({behavior: 'smooth', block: 'end'});
    }

    render() {
        const habitName = this.props.habit.name;
        const habitCount = this.props.habit.count
        // const {name, count} = this.props.habit
        return (
        
        <li className='habit' ref={this.testRef}>
        <span className="habit-name">{habitName}</span>
        <span className="habit-count">{habitCount}</span>
        <button className='habit-button habit-increase' onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
        </button>
        <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
            <i className="fas fa-minus-square"></i>
        </button>
        <button className='habit-button habit-delete' onClick={this.handleDelete}>
            <i className="fas fa-trash"></i>
        </button>
        </li>
        )
    }
}

export default Habit;
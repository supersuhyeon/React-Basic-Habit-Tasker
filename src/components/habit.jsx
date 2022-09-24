import React, { Component } from 'react';

class Habit extends Component {
    componentDidMount(){
        console.log(`habit: ${this.props.habit.name} mounted`) //컴포넌트가 UI상에 등록이 되었을때 호출, 사용자에게 보여줄때 호출. 마운트가 되고나서 데이터를 받아오거나/ 타이밍 시작
    }
    componentWillUnmount(){
        console.log(`habit: ${this.props.habit.name} will unmount`) //우리가 지우기전에 호출됨. UI상에서 없어질때 기능들이 있다면구현. /타이밍 끝낼때
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

    render() {
        const habitName = this.props.habit.name;
        const habitCount = this.props.habit.count
        // const {name, count} = this.props.habit
        return (
        
        <li className='habit'>
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
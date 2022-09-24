import React, { Component } from 'react';
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
       console.log('habits/resetbutton')
        return(
            <>
            <HabitAddForm onAdd={this.handleAdd}>
            </HabitAddForm>
            <ul>
            {this.props.habits.map(value=>
            <Habit 
            key={value.id} //lists and keys => 성능개선을위해 불필요한 렌더링을 하지않기위해 고유번호 지정해서 key를 부여해줘야함. index넘버는 안됨.
            habit={value} //habit은 프로퍼티이름. 여기에 habits배열 값 하나하나를 저장함. 이 프로퍼티를 Habit.jsx에서는 this.props로 받음. => Habit.jsx 렌더에 오브젝트 3개 전달.
            //Habits라는 컨테이너 컴포넌트가 있다. state는 습관들을 담고있는 배열데이터가 있다. render안에서는 단순히 이 배열을 돌면서 각각의 습관들을 Habit컴포넌트에 연결해주는 일을한다
            // 결국은 습관들이라는 컴포넌트는 총 세개의 자식, habit이라는 3개의 컴포넌트를 가지게 되고 각각의 habit컴포넌트 안에는 배열안에 들어있는 아이템들이 전달된다.
            // React.creatElement ('태그<h1></h1>',props(=매나 html 속성같은개념)title="hello",children=>React.creatElement(<div/>)) => <h1 title="hello"><div></div><h1>
            //결국 내가 Habit이라는 새로운 태그를 만들어서 구성하는것.
            // <Habit habit=(id=1, name="Reading", count="0")></Habit>
            // <Habit habit=(id=2, name="Running", count="0")></Habit>
            // <Habit habit=(id=3, name="Coding", count="0")></Habit>
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
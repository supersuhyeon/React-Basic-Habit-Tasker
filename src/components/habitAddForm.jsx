//rsi
import React, { memo } from 'react'; //memo는 purecomponent처럼 props가 변경이 되지않으면 함수가 호출되지 않는다.

const HabitAddForm = memo(props => {

    const inputRef = React.createRef() //리액트는 createRef로 멤버변수를 정의하고 원하는 해당하는 컴포넌트에 연결하기, state가 따로없다면 함수형써도됨 this가 필요없고 const변수로 할당.
    const onSubmit = event => {
            event.preventDefault()// 기본적으로 submit이 되면 새로고침이되거나 다른 페이지로 간다고 생각함
            // console.log(this.inputRef.current.value)
            const name = inputRef.current.value
            name && props.onAdd(name) //멤버변수 변하지 않음.  
            inputRef.current.value = '';
        }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className='add-input' placeholder='habit'/>
            <button className='add-button'>Add</button>
        </form>
    );

});

export default HabitAddForm;
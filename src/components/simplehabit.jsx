import { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';

const Simplehabit = (props) => {

    // state = {
    //     count : 0
    // }
  
    const [count, setCount] = useState(0) //변수 2개/ 초기값세팅/ 실제 state값을 count라는 변수에 넣음. 카운트를 업데이트할 수있는 setCount함수를 리턴
    const spanRef = useRef() //react.creatRef() 반복되는걸 막기위해.
   
    const handleIncrement = useCallback(() => { //onclick의 handleIncrement가 무한정 새로운 오브젝트를 만드는걸 방지. 만일 계속만들면 memo를 쓰더라도 소용없음 왜? 새로운 오브젝트 props로 변경되니까
        setCount(count + 1) //캐쉬로 동일한 콜백함수 ref을 전달한다.
    })

    useEffect(()=>{
        console.log(`mounted & updated: ${count}`)
    },[]);

    return (      
        <li className='habit'>
            <span ref={spanRef} className='habit-name'>Reading</span>
            <span className='habit-count'>{count}</span>
            <button className='habit-button habit-increase' onClick={handleIncrement}>
                <i className='fas fa-plus-square'></i>
            </button>
        </li>
        )
};

export default Simplehabit;
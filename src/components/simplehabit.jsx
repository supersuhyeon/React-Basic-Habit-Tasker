import { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';

const Simplehabit = () => {

    // state = {
    //     count : 0
    // }
  
    const [count, setCount] = useState(0) //변수 두개 지정, useState(초기값), count,setCount를 선언해놓고 useState를 호출하게되면 리액트에서 두개를 리턴해줌. 실제 스테이트 값과, 업데이트 될 함수. useState(0)는 count에 할당
    const spanRef = useRef() //react.creatRef() 반복되는걸 막기위해.
   
    const handleIncrement = useCallback(() => { //onclick의 handleIncrement가 무한정 새로운 오브젝트를 만드는걸 방지. 만일 계속만들면 memo를 쓰더라도 소용없음 왜? 새로운 오브젝트 props로 변경되니까
        setCount(count + 1) //캐쉬로 동일한 콜백함수 ref을 전달한다.
    })

    useEffect(()=>{
        console.log(`mounted & updated: ${count}`) //mount될때 한번 실행 업데이트될때마다 실행됨
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
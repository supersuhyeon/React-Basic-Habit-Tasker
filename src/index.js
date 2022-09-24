import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//react.createElement(

//type, 태그이름문자열, 리액트 컴포넌트, React.Fragment
//[props], 리액트 컴포넌트에 넣어주는 외부 데이터 객체
//[...children] 자식으로 넣어주는 요소들, 사이에 넣는거

//1. 태그이름 문자열 type

//<h1>type이 "태그이름문자열"입니다</h1>
//ReactDOM.render(
// React.createElement('h1',null(=attribute속성값),`type이 "태그이름문자열"입니다`),
// document.querySelector('#root') //그려줄DOM위치
//)
//)

//2. 리액트 컴포넌트 type

// const Component = () => {
//   return React.createElement('p', null, `type이 "react 컴포넌트"입니다`)
// }

//<Component></Component> => <Component /> => <p>type이 "react 컴포넌트"입니다</p>
//ReactDOM.render(React.creatElement(Component, null, null), document.querySelector('#root))
//)

//3. React.Fragmemt
// ReactDOM.render(
//   React.createElement(
//     React.Fragment, //태그없이 그냥 들어감 배열처럼 들어갈수있음
//     null,
//     `type이 "React Fragment"입니다`
//   ),
//   document.querySelector('#root)
// )

//4. 만일 react.createlement로 복잡한 엘리먼트들을 만들어야한다면?
//react.creatElement의 children부분에 계속 넣고 넣고 해야해서 효율성이 떨어짐 그래서 방법은? 
// ReactDOM.render(
//   React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'div',
//       null,
//       React.createElement('h1',null,"주제"),
//       React.createElement(
//         'ul',
//         null,
//         React.createElement("li",null,"react"),
//         React.createElement("li",null,"vue")
//        )
//       )
//      ),
//        document.querySelector('#root)
// )

// ReactDOM.render(
//   <div>
//     <div>
//       <h1>주제</h1>
//       <ul>
//         <li>react</li>
//         <li>vue</li>
//       </ul>
//     </div>
//   </div>
// )

// 위에처럼 creatElement를 써서 적는것보다 일반 html 처럼 작성할수있도록 하려면
// 우리가 작성한 어떤 코드를 순수하게 실행 할 수 있는 자바스크립트로 변환하는 과정이 필요.
// 이 역할을 babel에 의해 진행됨. 
// JSX문법으로 작성된 코드는 순수한 javascript로 컴파일하여 사용한다 바벨이 도와줌. 그래서 jsx파일에서 html처럼 만들어도 바벨덕에 알아서 creatElement로 변환됨 
## Habit Tracker with React

![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/94214512/192191276-81395f12-09d8-435e-a693-b2e6cdc8b66b.gif)

Simple Web-app where you can write down your habits
<br>
[Test-Habit-Tracker](https://6331259e746bfd1518083ef1--suhyeonhabittasker.netlify.app/)<br>

![react1](https://user-images.githubusercontent.com/94214512/192173497-c8961edc-646e-49a1-b830-e52a584d2463.png)

### Goals of the project

1. Practice React grammar (component, state, props, etc)
2. Review the concepts of class, object(object destructuring assignment, object mutability/immutability), callback functions, and arrays
3. Class vs function and preview React hook

### Languages

JSX, CSS, React

### Features

1. Difference Between Class vs Function vs React Hooks

- Class-type Component<br>
  To create a component in React, inherit the React.Component class, put the data in this.state, and define how to display the data in the UI using JSX syntax grammar like HTML in the render() function. When the data (state) changes, React calls the render() function and the UI is updated!!!

```js
import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  //React.PureComponent’s shouldComponentUpdate() only shallowly compares the objects.
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
```

- Function-type Component<br>
  If there is no data (state) in the component itself, you only need to show the data (props) received from the outside, or if it is a very static component that does not have both state and props, you can make a React component with functional type. Contrary to class, whenever the function is called, the code block {} of the function is executed again, and all local variables declared in it are redefined and assigned values ​​within the execution context of the function. So, when there is no need for state or life cycle methods provided by React, it is better to use a functional component.

```js
import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
```

- React-Hook <br>
  React hook is a tool that connects other functions of React to functional components like hooks, helping functional components to use state and lifecycle methods that were only available in class components. Hooks provided by default in React are functions that start with a word 'use' like useState, useEffect, useCallback, useContext, useMemo, useReducer, useRef. Further details about React hook will be documented in my next github repository.

2. Stick to immutability of object (DO NOT CHANGE STATE!!)

- SetState works asynchronously
- Does not work in PureComponent. This is because PureComponent compares the reference address between the current component's state (this.state) and the new state that needs to be updated (a new object passed as an argument to the setState function) and calls the component's render function when an update is required. If the this.state object is directly modified, the same object is passed to the setState function, so the reference to the object to be compared is the same, so React does not call the render function as it determines that there is no need to update.

```js
class App extends PureComponent {//PureComponent
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.state.count++; //work in Component but not in PureComponent due to the same reference address copied
            this.setState(this.state);
          }}
        >
          Click
        </button>
      </>
    );
  }
```

3. Spread Operator does Shallow-cloning as well. <br>

Tested handleIncrement() which makes count + 1 under PureComponent.
<br>
<br>
**Before performance improvement**

![ezgif com-gif-maker (9)](https://user-images.githubusercontent.com/94214512/192214113-d108b1d4-5ed1-4dd1-93fc-9374142ab4fe.gif)

As you can see, it doesn't render because this.state.habits and this.setState({habits}) points the same ref address object
even though you can the count value (habits[index].count++)

```js
class App extends PureComponent {
  state = {
    habits: [
        {id : 1, name : 'Reading', count :0},
        {id : 2, name : 'Running', count :0},
        {id : 3, name : 'Coding', count :0}
    ],
}

handleIncrement = (habit)=>{
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState({habits:habits})
}
```

**After performance improvement**
![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/94214512/192216212-f7a24bc0-5156-48a5-b30a-4666403697f5.gif)

```js
handleIncrement = (habit) => {
  const habits = this.state.habits.map((item) => {
    if (item.id === habit.id) {
      return { ...habit, count: habit.count + 1 }; //Create a new object ref
    }
    return item;
  });
  this.setState({ habits });
};
```

### Reference Links

[React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)<br>
[setState(newState) vs setState(prevState => { return newState; }) ](https://reactjs.org/docs/state-and-lifecycle.html)<br>
[dreamcoding-react-class](https://academy.dream-coding.com/)<br>
[fastcampus-react-class](https://fastcampus.co.kr/)<br>
[별코딩-master-react-hooks-playlists-youtube](https://www.youtube.com/results?sp=mAEB&search_query=%EB%B3%84%EC%BD%94%EB%94%A9)

### Self-reflection

React is a completely different concept than vanilla Javascript. Learning and using React in this project showed a whole new world!!
The more I study, the more I feel that another level of how data works in Javascript is required.
I referenced React documentation, YouTube, MDN, and googled countless times to understand the whole concept. Once I realized the importance of having solid Javascript foundations as I learn more React, I decided to review classes, objects, callback functions, and arrays.
This habit-tracker took me around 7 days to fully understand because I needed to check through the console all the time. It was good to figure out how ScrollIntoView works, using lifecycle and React.CreateRef by myself. And after figuring ut out, I felt that I really need to try to think the React way and not in a DOM script way...<br>It seems like a lot of people prefer React hook to class these days so I will try to practice React hook functions more in the future. In the interest of maintaining a project built a long time ago, I will maintain my knowledge of class too. My next step is to practice lifeCycle, React-Hooks !!

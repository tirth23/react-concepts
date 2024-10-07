import React, { useState } from "react";

/* 
In React, a "state" is a built-in object that represents the current condition of a component. 
It's essentially a JavaScript object that holds data relevant to a component and can influence what is rendered on the user interface.
State allows components to manage dynamic data and update the UI accordingly based on user interactions, network responses, or any
other event.
Unlike props, which are passed down from parent to child components and are immutable, state is managed internally by each component
and can be changed. When the state of a component changes, React automatically re-renders the component, updating the UI to reflect the
new state 
State is internal data that belongs to a specific component. It is managed and updated within the component itself using the useState()
hook (for functional components) or this.setState() method (for class components) as we will learn later.
State is not accessible outside of the component it belongs to, making it private and encapsulated within the component.

Props (short for "properties") are passed from parent components to child components. They represent data that is received by a 
component from its parent and are immutable within the component receiving them.
Props cannot be changed within the component that receives them. They are read-only and can only be modified by
the parent component that passes them.
Props are accessed as parameters in functional components or via this.props in class components.
*/
let a = 0;
const UseState = () => {
	const [currentState, setCurrentState] = useState(0);
  let b = 0;
  const handleClick = () => {
    setCurrentState(currentState + 1);
    a = a + 1;
    b = b + 1;
    console.log({a, b});
  }
	return (
		<>
			<button onClick={handleClick}>
				Increment
			</button>
			<div>{currentState}</div>
		</>
	);
};

export default UseState;

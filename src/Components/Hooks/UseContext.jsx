import React, { useState, createContext, useContext } from "react";

/* when context value is changes, it will re-render the component that is using the context starting from parent */

const UserContext = createContext();

export const UseContext = () => {
	const [user, setUser] = useState("Jesse Hall");
	console.log("component 1 rendered");
  let currentValue = 100;
  console.log(currentValue, 'in main component');
	return (
		<UserContext.Provider value={{ user, setUser, currentValue }}>
			<h1>{`Hello ${user}!`}</h1>
			<Component2 />
		</UserContext.Provider>
	);
};

function Component2() {
	console.log("component 2 rendered");
	return (
		<>
			<h1>Component 2</h1>
			<Component3 />
		</>
	);
}

function Component3() {
	const [check, setCheck] = useState(0);
	console.log("component 3 rendered");
	return (
		<>
			<h1 onClick={() => setCheck(check + 1)}>Click Component 3 to re-render 3, 4, 5 components</h1>
			{check}
			<Component4 />
		</>
	);
}

function Component4() {
  let { currentValue} = useContext(UserContext);
	console.log("component 4 rendered");
  currentValue = currentValue + 100;
  console.log(currentValue, 'in component 4');
  /* it doesnot cause re render since change in value is in local copy */
  const doesNotCauseReRender = () => {
    currentValue = currentValue + 200;
    console.log(currentValue, 'in component 4 click');
  }
	return (
		<>
			<h1 onClick={doesNotCauseReRender}>Click Component 4</h1>
			<Component5 />
		</>
	);
}

const Component5 = () => {
	const { user, setUser } = useContext(UserContext);
	console.log("component 5 rendered");
  const causeReRender = () => {
    setUser("Changed User");
    console.log("component 5 re-rendered");
  }
	return (
		<>
			<h1 onClick={causeReRender}>Click Component 5 to render all components</h1>
			<h2>{`Hello ${user} again!`}</h2>
		</>
	);
};

export default UseContext;

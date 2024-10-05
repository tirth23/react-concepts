import React, { useState } from "react";
import SecondParent from "./UseCallbackSecondParent";

const UseCallback = () => {
	const [count1, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	const handleClick = () => {
		setCount((prev) => prev + 1);
		console.log("I am parent count 1");
	};
	const handleClick2 = () => {
		setCount2((prev) => prev + 1);
		console.log("I am parent count 2");
	};
	return (
		<>
			Outer most parent: <br />
			{count1} <button onClick={handleClick}>count++</button>
			<br />
			{count2} <button onClick={handleClick2}>count2++</button>
			<br />
			<SecondParent count={count1} />
		</>
	);
};

export default UseCallback;

import React, { useState } from "react";

function Counter(props) {
	let [counter, setCounter] = useState(0);
	// setCounter=(newval)=>{counter=newval}
	let [msg, setMsg] = useState("Hello");

	let increment = () => {
		if (counter < props.max) setCounter(counter + 1);
	};
	let decrement = () => {
		if (counter < props.min) setCounter(counter - 1);
	};
	console.log("counter is rendered..");
	return (
		<div>
			<button onClick={decrement}>-</button>
			<span>{counter}</span>
			<button onClick={increment}>+</button>
			<p>{msg}</p>
			<button onClick={() => setMsg(msg + "!")}>Change msg</button>
		</div>
	);
}

export default Counter;

import React, { useState, useEffect } from "react";

/* 
In React, side effects refer to any operations that affect something outside the scope of the component rendering process. 
These are tasks that interact with external systems, modify global states, or deal with things beyond React's control. 
Side effects (Data Fetching, Event Listeners, Timers, DOM manipulation) typically do not produce output directly based 
on the input (unlike rendering, which is purely input-output based), and they often involve asynchronous operations.

useEffect is designed for side effects, operations that should not occur during the main rendering process to avoid blocking the UI.

useEffect is a hook that allows you to perform side effects in function components.

useEffect is called after render

when component is mounted, ALL useEffect is called
when component is updated, based on dependency array, useEffect is called
when component is unmounted, ALL useEffect is called but executes only return callback to clean up  

no dependeny => called everytime on each render
empty dependency array => called only once on mount
dependency array => useEffect is called if anyone itme in dependency array is changed

*/

const UseEffect = (props) => {
	const { customText } = props;
	const [counter, setCounter] = useState(0);
	let now = performance.now();
	while (performance.now() - now < 400) {
		// Wait for the next browser paint. block render
		// add useLayoutEffect for stopping browser paint
	}

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("I am running setInterval");
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);

		console.log("creater interval with id ", interval);

		return () => {
			console.log("i was unmounted");
			console.log("removing interval with id ", interval);
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		console.log("2nd effect is called");
		return () => {
			console.log("cleaning up 2nd effect for customText");
		};
	}, [customText]);

	useEffect(() => {
		console.log("i am rendering again and again in 3rd useEffect");
		return () => {
			console.log("cleaning up 3rd effect for customText");
		};
	});

	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = (async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const result = await response.json();
			setData(result);
		})();
	}, []);

	return (
		<>
			<span>Current time is: {counter}</span>
			<br />
			<span>{customText}</span>
			<br />
			{/* <button onClick={startTimer}>Start Timer</button> */}
			<br />
			{data ? (
				<p>Data Loaded! with fiorst user {data[0].name}</p>
			) : (
				<p>Loading ...</p>
			)}
		</>
	);
};
export default UseEffect;

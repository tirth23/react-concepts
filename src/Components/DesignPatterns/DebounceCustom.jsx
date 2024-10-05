import React, { useCallback, useMemo, useState } from "react";

// /* Uncontrolled Input */
// const Debounce = () => {
//   let counter = 0;
// 	const getData = (e, ...arr) => {
// 		console.log("Fetching data...", counter++, arr, e.target.value);
// 	};
// 	const debounce = (func, delay) => {
// 		let timer;
// 		return (...args) => {
// 			clearTimeout(timer);
// 			timer = setTimeout(() => {
// 				func(...args);
// 			}, delay);
// 		};
// 	};
// 	const debouncedCallAPI = debounce(getData, 300);
// 	return (
// 		<>
// 			<h1>Debouncing in React</h1>
// 			<input type="text" onChange={debouncedCallAPI} />
// 		</>
// 	);
// };

/* Controlled Input */
const DebounceCustom = () => {
	const [inputValue, setInputValue] = useState("");
	let counter = 0;
	const getData = (e, ...arr) => {
		console.log("Fetching data...", counter++, arr, e.target.value);
	};
	const debounce = (func, delay) => {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				func(...args);
			}, delay);
		};
	};

	// Use useCallback to memoize debouncedCallAPI
	const debouncedCallAPI = useCallback(debounce(getData, 300), []);

	return (
		<>
			<h1>Debouncing in React</h1>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
					debouncedCallAPI(e);
				}}
			/>
		</>
	);
};

export default DebounceCustom;

import React, { useMemo, useState } from "react";

function UseMemo(props) {
	const [usd, setUsd] = useState(0);
	const [msg, setMSg] = useState("Hello");
	// const [inr,setInr]=useState(0)

	let handlechange = (event) => {
		console.log(event.target.value);
		//setUsd(parseInt(event.target.value))
		if (event.target.value) {
			setUsd(parseInt(event.target.value));
		} else {
			setUsd(0);
		}
	};
	//useMemo(callback,dep)=>it will execute the callback if therre is change in dep
	//else it will return the cached value.
	let convert_usd_to_inr = useMemo(() => {
		console.log("Expensive function..");
		return usd * 82.9;
	}, [usd]);

	return (
		<div>
			<input type="text" onChange={handlechange} placeholder="Enter USD" />
			<p>INR:{convert_usd_to_inr}</p>
			<p>{msg}</p>
			<button
				onClick={() => {
					setMSg(msg + "!");
				}}
			>
				change msg
			</button>
		</div>
	);
}

export default UseMemo;

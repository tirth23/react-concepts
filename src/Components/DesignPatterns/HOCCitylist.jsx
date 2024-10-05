import React from "react";
import { Enhance_component } from "./HOCBasecounter";

function HOCCitylist(props) {
	let citylist = ["mumbai", "pune", "delhi", "Chennai"];
	console.log(props);
	return (
		<div>
			<button onClick={props.dec}>{"<"}</button>
			<span>{citylist[props.index]}</span>
			<button onClick={props.inc}>{">"}</button>
		</div>
	);
}

export default Enhance_component(HOCCitylist);

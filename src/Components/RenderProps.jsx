import React, { useState } from "react";
import InputRender from "./InputRender";

/* This is presentatonal component */
/* Render Prop Function: The function passed as a prop to the higher-order component. 
It receives necessary data or context and returns the JSX elements to be rendered. */
const RenderProps = (props) => {
	const showvalue = (value) => <>The value is {value}</>;
	const showmultiple = (value) => <>The multiple value is {value * 10}</>;
	return (
		<>
			<>
				<InputRender renderTextBelow={showvalue} />
				<br />
				<InputRender renderTextBelow={showmultiple} />
			</>
		</>
	);
};

export default RenderProps;

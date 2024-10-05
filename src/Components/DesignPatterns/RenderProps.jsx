import React, { useState } from "react";
import RenderInput from "./RenderInput";

/* This is presentatonal component */
/* Render Prop Function: The function passed as a prop to the higher-order component. 
It receives necessary data or context and returns the JSX elements to be rendered. */
const RenderProps = (props) => {
	const showvalue = (value) => <>The value is {value}</>;
	const showmultiple = (value) => <>The multiple value is {value * 10}</>;
	return (
		<>
			<>
				<RenderInput renderTextBelow={showvalue} />
				<br />
				<RenderInput renderTextBelow={showmultiple} />
			</>
		</>
	);
};

export default RenderProps;

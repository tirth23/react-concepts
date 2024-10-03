import React, { forwardRef } from "react";

export const RefInput = (props) => {
	console.log("input box props are: ", props);
	return <input ref={props.inputReference} type="text" />;
};


export const RefInputForwardRef = forwardRef((props, ref) => {
	console.log("input box props are: ", props);
	return <input ref={ref} type="text" />;
});

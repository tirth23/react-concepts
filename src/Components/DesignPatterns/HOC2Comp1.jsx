import React, { forwardRef } from "react";
import withDimension from "./HOC2EnhanceWidthDimension.jsx";

/* Higher-Order Component (HOC): A function that takes a component as input and returns a new component with enhanced functionality.
HOCs often use render props to pass data or context to the wrapped component. */

const Comp1 = (props, forwardedRefFromParent) => {
	return (
		<div ref={forwardedRefFromParent} style={{ width: "250px", height: "100px" }}>
			Comp1 Width: {props.width}
      <br/>
      Comp1 Height: {props.height}
      <br />
      Random Props: {props.randomNumber}
		</div>
	);
};

// return function/component not jsx
export default withDimension(forwardRef(Comp1));

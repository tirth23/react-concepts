import React, { useEffect, useRef, useState } from "react";

const withDimension = (Component) => {
	/* 
  // not valid since it will return jsx instead of component
	return <Component />;
  */
	/*
  // valid since it returns function/component
  return Component; 
  */
	return function EnhanceWithDimension(props) {
		const [width, setWidth] = useState(null);
		const [height, setHeight] = useState(null);

		const compRef = useRef(null);
		useEffect(() => {
			if (compRef.current) {
				setWidth(compRef.current.offsetWidth);
				setHeight(compRef.current.offsetHeight);
			}
		}, [compRef]);

		return <Component ref={compRef} height={height} width={width} {...props} />;
	};
};

// it should return function/component not jsx
export default withDimension;

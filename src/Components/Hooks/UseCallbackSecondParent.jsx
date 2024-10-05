import React, { useCallback } from "react";
import ThirdParent from "./UseCallbackThirdParent.jsx";
const SecondParent = () => {
	const myFunction = useCallback(() => {
		console.log("my function called");
	}, []);

  /* add callback so third parent is not re-rendered */
	const handleChange = useCallback(() => {
		console.log("hey hey haha");
		myFunction();
	}, [myFunction]);
  
	return (
		<>
			I am second parent
			<br />
			<ThirdParent handleChange={handleChange} />
		</>
	);
};
export default SecondParent;

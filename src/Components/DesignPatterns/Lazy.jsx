import React, { useState, lazy, Suspense } from "react";
// import Text from "./Text";

/* 
Code splitting is an advanced optimization technique in React that helps improve the performance of your application by 
loading only the code that’s needed at the moment, rather than loading everything at once. 
This is especially important for larger applications that have many components or different routes, as loading all the 
code upfront can slow down the initial load time of the application, affecting user experience.

Different parts of application are loaded aynchronously

Code splitting solves this problem by breaking the code into smaller chunks that are loaded on demand. 
This way, only the necessary parts  of the application are loaded when the user needs them, significantly
improving load time and performance.

Code splitting in React is achieved using dynamic imports, combined with tools like React.lazy, Suspense, and React Router 
for route-based splitting

lazy lets you defer loading component’s code until it is rendered for the first time. 

Lazy loading is technique that allows to load scryRenderedComponentsWithType, modules or asserts
asynchronously, improving loading time of the application. mostly used for large component 

Check in Network tab and select js and check chunks created for lazy loaded component & size of bundle is reduced
*/

const LazyText = lazy(() => delayForDemo(import("./LazyText.jsx")));

function delayForDemo(promise) {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000);
	}).then(() => promise);
}

const Lazy = () => {
	const [showText, setShowText] = useState(false);
	return (
		<>
			<button
				onClick={() => {
					setShowText((prev) => !prev);
				}}
			>
				Toggle Text
			</button>
			{/* {showText && <Text></Text>} */}

			{showText && (
				<Suspense fallback={<div>I am loading</div>}>
					<LazyText>Hello guys!</LazyText>
				</Suspense>
			)}
		</>
	);
};

export default Lazy;

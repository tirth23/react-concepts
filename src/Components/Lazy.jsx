import React, { useState, lazy, Suspense } from "react";
// import Text from "./Text";

/* lazy lets you defer loading component’s code until it is rendered for the first time. */
const LazyText = lazy(() => delayForDemo(import("./Text")));

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

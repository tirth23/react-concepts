import React, { useRef, useState } from "react";
import { RefInput, RefInputForwardRef } from "./RefInput";

const Ref = () => {
	let myLocal = 0;
	/* ref has memory that persists between renders & does not cause a rerender */
	const myref = useRef(0);
	const [myCount, setMyCount] = useState(0);

	const inputRef = useRef(null);
  const inputRefWithForward = useRef(null);

	return (
		<>
			<button
				onClick={() => {
					myLocal += 1;
				}}
			>
				Change local Variable
			</button>
			<button
				onClick={() => {
					myref.current += 1;
				}}
			>
				Change Ref Variable
			</button>
			<button
				onClick={() => {
					setMyCount((prev) => prev + 1);
				}}
			>
				Change State Variable
			</button>

			<div>
				<div>Local Variable: {myLocal}</div>
				<div>Ref Variable: {myref.current}</div>
				<div>State Variable: {myCount}</div>
			</div>

			{/* passing ref to InputRef component by making custom ref */}
			<RefInput inputReference={inputRef} />
			<button
				onClick={() => {
					if (inputRef.current) inputRef.current.focus();
				}}
			>
				Focus on InputBox Custom Ref
			</button>

			<RefInputForwardRef ref={inputRefWithForward} />
			<button
				onClick={() => {
					if (inputRefWithForward.current) inputRefWithForward.current.focus();
				}}
			>
				Focus on InputBox Forward Ref
			</button>
		</>
	);
};

export default Ref;

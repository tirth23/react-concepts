import React, { useState } from "react";
import ListRenderingText from "./ListRenderingText";

const ListRendering = () => {
	const [data, setData] = useState([
		{ id: "a", text: "text 0" },
		{ id: "b", text: "text 1" },
		{ id: "c", text: "text 2" },
		{ id: "d", text: "text 3" },
		{ id: "e", text: "text 4" },
	]);

  // when new data added at start of array, all children will be re-rendered if unique key not used
	const addMoreData = () => {
		setData((prevData) => [{id: "f", text: "text 5" }, ...prevData]);
	};
	return (
		<>
			{data.map((item, index) => (
				<ListRenderingText key={item.id}>{item.text}</ListRenderingText>
			))}
			<button onClick={addMoreData}>Add more data</button>
		</>
	);
};

export default ListRendering;

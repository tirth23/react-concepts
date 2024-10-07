import React, { useState } from "react";

function Home(props) {
	//props.msg="Hai!!"//error-Props immutable
	let country = "india";
	//jsx=javascript xml
	let styleobj = { backgroundColor: "#f1c40f" };

	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const [add, setAdd] = useState(arr);

	let btn = <button>XXX</button>;

	function myfunction() {
		return <p>returned from function call</p>;
	}

	return (
		<>
			<h2>
				{props.msg}-{props.country}
			</h2>
			<p className="title">jsx demo</p>
			<p style={styleobj}>
				{country}-{1 + 2}
			</p>
			{myfunction()}
			{btn}
			<button onClick={() => setAdd((prev) => [11, ...prev])}>add</button>
			{add.map((item, index) => {
				return <p key={index}>{item}</p>;
			})}
		</>
	);
}

// function Home({ msg, country }) {
// 	msg = "Hai!!";
// 	return (
// 		<h2>
// 			{msg}-{country}
// 		</h2>
// 	);
// }

export default Home;

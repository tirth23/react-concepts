import React from "react";

function Home(props) {
	//props.msg="Hai!!"//error-Props immutable
	let country = "india";
	//jsx=javascript xml
	let styleobj = { backgroundColor: "#f1c40f" };
	let btn = <button>click me</button>;

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

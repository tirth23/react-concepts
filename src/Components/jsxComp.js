import React from "react";

function JsxComp(props) {
	let country = "india";
	//jsx=javascript xml
	//helps to add html code within js
	let styleobj = { backgroundColor: "tomato" };
	let btn = <button>click me</button>;

	function jk() {
		return <p>jk</p>;
	}

	return (
		<div>
			<p className="title">jsx demo</p>
			<p>Jsx rules</p>
			<p>
				elements should be enclosed with div/ <></>
			</p>
			<p style={styleobj}>
				{country}-{1 + 2}
			</p>
			{jk()}
			{btn}
		</div>
	);
}

export default JsxComp;
//elements should be enclosed with div/ <></>
//js-expression can be included by using interpolation- {js expression}
//background-color:"red"
//backgroundColor:"red"

//class should be mentioned as className

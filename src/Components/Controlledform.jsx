import React, { useState } from "react";
import axios from "axios";

function Controlledform(props) {
	const [uname, setuname] = useState("murali");
	const [email, setemail] = useState("murali@xyz.com");

	let handleuname = (event) => {
		setuname(event.target.value);
	};
	let handleEmail = (event) => {
		setemail(event.target.value);
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		let user = { username: uname, useremail: email };
		axios
			.post(
				"https://trainingdata-13117.firebaseio.com/courses.json",
				JSON.stringify(user)
			)
			.then((res) => {
				console.log(res.status);
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					User name:
					<input type="text" value={uname} onChange={handleuname} />
				</div>
				<div>
					email:
					<input type="text" value={email} onChange={handleEmail} />
				</div>
				<input type="submit" value="Register" />
			</form>
		</div>
	);
}

export default Controlledform;

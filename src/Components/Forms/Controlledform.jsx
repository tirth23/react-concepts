import React, { useState } from "react";
import axios from "axios";

function Controlledform(props) {
	const [inputData, setInputData] = useState({ name: "", email: "" });

	const handleData = (event) => {
		setInputData({ ...inputData, [event.target.name]: event.target.value });
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		let user = { username: inputData.name, useremail: inputData.email };
    console.table(user);
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
					<label htmlFor="nameid">User name:</label>
					<input type="text" id="nameid" name='name' value={inputData.name} onChange={handleData} />
				</div>
				<div>
					<label htmlFor="emailid">email:</label>
					<input type="text" id="emailid" name='email' value={inputData.email} onChange={handleData} />
				</div>
				<input type="submit" value="Register" />
			</form>
		</div>
	);
}

export default Controlledform;

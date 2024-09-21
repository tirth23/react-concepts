import axios from "axios";
import React, { useState, useEffect } from "react";

export default function AxiosPost() {
	const data = { fname: "", lname: "" };
	const [inputData, setInputData] = useState(data);

	const [userData, setUserData] = useState([]);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
			console.log(res);
			console.log(res.data);
			setUserData(res.data);
		});
	}, []);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setUserData(data);
			});
	}, []);
	//https://trainingdata-13117.firebaseio.com/courses.json

	const handledata = (e) => {
		setInputData({ ...inputData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("https://jsonplaceholder.typicode.com/users", inputData)
			.then((res) => {
				console.log(res);
				console.log(res.data);
			});
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	fetch("https://jsonplaceholder.typicode.com/users", {
	// 		method: "POST", // Specify the request method
	// 		headers: {
	// 			"Content-Type": "application/json", // Specify the content type as JSON
	// 		},
	// 		body: JSON.stringify(inputData), // Convert the input data to a JSON string
	// 	})
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error("Network response was not ok");
	// 			}
	// 			console.log(res);
	// 			return res.json(); // Parse the JSON response
	// 		})
	// 		.then((data) => {
	// 			console.log(data); // Handle the response data
	// 		})
	// 		.catch((error) => {
	// 			console.error("There was a problem with the fetch operation:", error);
	// 		});
	// };

	const handleUpdate = (e) => {
		e.preventDefault();
		axios
			.put("https://jsonplaceholder.typicode.com/users/1", inputData)
			.then((res) => {
				console.log(res);
			});
	};

	// const handleUpdate = (e) => {
	// 	e.preventDefault();
	// 	fetch("https://jsonplaceholder.typicode.com/users/1", {
	// 		method: "PUT", // Specify the request method as PUT
	// 		headers: {
	// 			"Content-Type": "application/json", // Specify the content type as JSON
	// 		},
	// 		body: JSON.stringify(inputData), // Convert the input data to a JSON string
	// 	})
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error("Network response was not ok");
	// 			}
	// 			console.log(res);
	// 			return res.json(); // Parse the JSON response
	// 		})
	// 		.then((data) => {
	// 			console.log(data); // Handle the response data
	// 		})
	// 		.catch((error) => {
	// 			console.error("There was a problem with the fetch operation:", error);
	// 		});
	// };

	const handleDelete = (e) => {
		e.preventDefault();
		axios.delete("https://jsonplaceholder.typicode.com/users/1").then((res) => {
			console.log(res);
		});
	};

	// const handleDelete = (e) => {
	// 	e.preventDefault();

	// 	fetch("https://jsonplaceholder.typicode.com/users/1", {
	// 		method: "DELETE", // Specify the request method as DELETE
	// 	})
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error("Network response was not ok");
	// 			}
	// 			console.log(res);
	// 			return res.json(); // Parse the JSON response, if there is any
	// 		})
	// 		.then((data) => {
	// 			console.log(data); // Handle the response data
	// 		})
	// 		.catch((error) => {
	// 			console.error("There was a problem with the fetch operation:", error);
	// 		});
	// };

	return (
		<>
			<div>
				{userData.map((user) => (
					<div key={user.id}>{user.name}</div>
				))}
			</div>
			<label htmlFor="fname">FNAME</label>
			<input
				type="text"
				name="fname"
				id="fname"
				value={inputData.fname}
				onChange={handledata}
			/>
			<br />
			<label htmlFor="lname">LNAME</label>
			<input
				type="text"
				name="lname"
				id="lname"
				value={inputData.lname}
				onChange={handledata}
			/>
			<button onClick={handleSubmit}>SUBMIT</button>
			<button onClick={handleUpdate}>UPDATE</button>
			<button onClick={handleDelete}>DELETE</button>
		</>
	);
}

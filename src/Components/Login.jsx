import React from "react";
import Profile from "./Profile";
import { login } from "./reduxstore/User";
import { logout } from "./reduxstore/User";
import { useDispatch } from "react-redux";

function Login(props) {
	let dispatcher = useDispatch();
	let temp_object = { name: "virat", email: "virat@gmail.com" };
	return (
		<div>
			<button
				onClick={() => {
					dispatcher(login(temp_object));
				}}
			>
				Login
			</button>
			<button
				onClick={() => {
					dispatcher(logout());
				}}
			>
				Logout
			</button>
			<Profile />
		</div>
	);
}

export default Login;

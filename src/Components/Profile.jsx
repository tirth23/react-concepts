import React from "react";
import { useSelector } from "react-redux";
//useSElector helps to get data from store
function Profile(props) {
	let user = useSelector((state) => state.user.value);
	return (
		<div>
			<h1>username:{user.name}</h1>
			<h2>useremail:{user.email}</h2>
		</div>
	);
}

export default Profile;

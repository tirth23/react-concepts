import React from "react";
import { useFetch } from "./UsingCustomFetch";

function UsingCustomHook(props) {
	let postlist = useFetch("https://jsonplaceholder.typicode.com/posts");
	let postitems = postlist.map((post, index) => (
		<li key={index}>{post.title}</li>
	));
	return <div>{postitems}</div>;
}

export default UsingCustomHook;

import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";

function Productdetails(props) {
	let { pid, pname } = useParams();
	let productId = Number(pid); // Convert pid to a number
	let res_product = products.find((p) => p.id === productId);
	return (
		<div>
			<p>Product detail!!</p>
			<h1>{res_product?.name}</h1>
			<h4>{res_product?.brand}</h4>
			<h5>{res_product?.price}</h5>
		</div>
	);
}

export default Productdetails;

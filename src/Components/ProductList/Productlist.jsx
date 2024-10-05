import React from "react";
import { products } from "../products";
import Productitem from "./Productitem";
import { useState } from "react";

function Productlist(props) {
	const [productlist, setProductlist] = useState(products);

	let productitems = productlist.map((product) => (
		<Productitem prod_item={product} />
	));
	return <div>{productitems}</div>;
}

export default Productlist;

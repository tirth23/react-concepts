import React from "react";
import { useRef } from "react";
import { products } from "../products";

function Uncontrolledform(props) {
	let pname = useRef();
	let pbrand = useRef();
	let price = useRef();
	let pcat = useRef();

	let handleSubmit = (event) => {
		event.preventDefault();
		console.log("Form submitted..");
		console.log(pname.current.value);
		console.log(pbrand.current.value);
		let temp_product = {
			id: products.length + 1,
			name: pname.current.value,
			brand: pbrand.current.value,
			price: price.current.value,
			category: pcat.current.value,
			rating: 0,
			instock: true,
			comments: [],
		};
		products.push(temp_product);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					Product name:
					<input type="text" ref={pname} />
				</div>
				<div>
					Product brand:
					<input type="text" ref={pbrand} />
				</div>
				<div>
					Product price:
					<input type="text" ref={price} />
				</div>
				<div>
					Product category:
					<input type="text" ref={pcat} />
				</div>
				<div>
					<input className="btn btn-primary" type="submit" value="Add" />
				</div>
			</form>
		</div>
	);
}

export default Uncontrolledform;

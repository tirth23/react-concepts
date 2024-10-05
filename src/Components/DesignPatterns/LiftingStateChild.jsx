import React, { useState } from "react";

const LiftingStateChild = (props) => {
	const [name, setName] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(name);
  };

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" value={name} onChange={handleNameChange} />
        <button>Submit</button>
			</form>
		</div>
	);
};

export default LiftingStateChild;

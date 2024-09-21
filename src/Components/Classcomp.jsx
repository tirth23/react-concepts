import React, { Component } from "react";

class Classcomp extends Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0, info: this.props.msg };
	}

	increment = () => {
		this.setState({ counter: this.state.counter + 1 });
		this.setState({ info: this.state.info + "!" });
	};
	decrement = () => {
		this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		return (
			<div>
				<h2>I am a class comp-{this.props.msg}</h2>
				<p>{this.state.info}</p>
				<button onClick={this.decrement}>-</button>
				<span>{this.state.counter}</span>
				<button onClick={this.increment}>+</button>
			</div>
		);
	}
}

export default Classcomp;

import React, { Component } from "react";

class Lifecycledemo extends Component {
	constructor(props) {
		super(props);
		//initialize the component
		this.state = { counter: 0, msg: this.props.info };
		console.log("constructor executed..");
	}
	increment = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	static getDerivedStateFromProps(props, state) {
		//modify state based on new props
		console.log("GDSFP...");
		if (props.info !== state.msg) {
			return {
				msg: props.info,
			};
		} else {
			return null;
		}
	}

	shouldComponentUpdate(prevprops, prevstate) {
		//we can control the rendering based on state change or props change
		console.log("Should comp update..");
		if (prevstate.counter !== this.state.counter) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		console.log("render is executed..");
		return (
			<div>
				<p>Lifecycle demo-{this.state.msg}</p>
				<p>{this.state.counter}</p>
				<button onClick={this.increment}>+</button>
			</div>
		);
	}

	getSnapshotBeforeUpdate(prevprops, prevstate) {
		console.log("snap is taken...");
		console.log("old counter value is:" + prevstate.counter);
	}

	componentDidUpdate() {
		//handle the side effects of update
		console.log("component is updated...");
	}
	componentDidMount() {
		/*handle side effects*/
		/*getting data server*/
		console.log("getting data..");
		console.log("Componentdidmount is executed..");
	}

	componentWillUnmount() {
		console.log("unmounting...");
	}
}

export default Lifecycledemo;

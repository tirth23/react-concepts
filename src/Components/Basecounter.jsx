import React, { Component } from "react";

export let Enhance_component = (Originalcomp) => {
	//Originalcomp=<Citylist/>
	class Basecounter extends Component {
		constructor(props) {
			super(props);
			this.state = { counter: 0 };
		}
		increment = () => {
			this.setState({ counter: this.state.counter + 1 });
		};
		decrement = () => {
			this.setState({ counter: this.state.counter - 1 });
		};
		render() {
			return (
				<div>
					<Originalcomp
						index={this.state.counter}
						inc={this.increment}
						dec={this.decrement}
					/>
					{/*<Citylist index={counter} inc={this.increment} dec={this.decrement}*/}
				</div>
			);
		}
	}
	return Basecounter;
	/*
    <div>
                    
        <Citylist index={counter} inc={this.increment} dec={this.decrement}/>
    </div>*/
};

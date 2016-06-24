import React from "react";
import Header from "./Header";
import News from "./News";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			age: null

		};
	}

	changeName(name) {

		this.setState({name});
	}

	render() {
		return(
			<div>
			
			<Header changeName={this.changeName.bind(this)} name={this.state.name}></Header>
			<News/>

			</div>
		);
	}
}
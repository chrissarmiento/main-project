import React from "react";

export default class Header extends React.Component {

	manageNameChange(e) {

		this.props.changeName(e.target.value);
	}
	

	render() {
		// console.log(this.props);
		return (
			<div>
				<h1>Welcome {this.props.name}</h1>
				<input onChange={this.manageNameChange.bind(this)} />
			</div>
		);

	}

}
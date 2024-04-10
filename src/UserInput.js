import React, { Component } from "react";

class UserInput extends Component {
	state = {
		name: ""
	};
	// change event handler
	updateName = (e) => {
		this.setState({ name: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ name: "" });
	};

	render() {
		// returning UI
		return (
			<form onSubmit={this.handleSubmit}>
				{console.log(this.props)}
				{console.log(this.state)}
				<input
					type="text"
					placeholder="Add a new name here. . ."
					value={this.state.name}
					onChange={this.updateName}
				/>
				<input type="submit" value="Create Name Tag" />
			</form>
		);
	}
}

export default UserInput;
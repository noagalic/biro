import React, { Component } from 'react';
import Navbar from './LayoutParts/Navbar/Navbar';
import "./Layout.css";
import Sidebar from './LayoutParts/Sidebar/Sidebar';


class Layout extends Component {
	constructor() {
		super();
		this.state = {
			isVisible: false,
			input: '',
		}
	}

	onInputChange = (event) => {
		this.setState({input: event.target.value});
		console.log(this.state.input);
	}

	render() {
		return(
			<div>
				<Navbar />
				<Sidebar onInputChange = { this.onInputChange } />
			</div>
		)
	}
}

export default Layout;
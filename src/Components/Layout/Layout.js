import React, { Component } from 'react';
import Navbar from './LayoutParts/Navbar/Navbar';
import "./Layout.css";



class Layout extends Component {
	render () {
		return(
			<div>
				<Navbar />
			</div>
		)
	}
}

export default Layout;
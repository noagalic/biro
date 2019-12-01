import React from 'react';
import 'tachyons';
import './Sidebar.css';

const Sidebar = ({ onInputChange }) => {
	return (
		<div id="sidebar">
			<div id="searchBar">
				<input id="searchInput" className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />			
			</div>
			<div id="sidebarElements">
				
			</div>
		</div>
	)
}

export default Sidebar;
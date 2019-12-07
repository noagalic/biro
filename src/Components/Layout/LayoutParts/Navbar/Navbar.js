import React from 'react';
import 'tachyons';
import "./Navbar.css";


const Navbar = ({ onRouteChange, route }) => {
	return (
			<nav id="boi" className="bb b--black-10">
			<img src={require("./BIRO.png")} id="log" alt="loading" />
		      <div id="bla" className="flex-grow pa3 flex">
		              <p onClick= {() => onRouteChange('home')} to="/" className="f3 link pointer dib black dim mr3 mr4-ns">Home</p>
		              <p onClick= {() => onRouteChange('forum')} to="/forum" className="f3 link pointer dib black dim mr3 mr4-ns">Posts</p>
		              <p to="/users" className="f3 link dib black dim mr3 mr4-ns pointer">Users</p>
		        </div>
		     </nav>
		)
}

export default Navbar;
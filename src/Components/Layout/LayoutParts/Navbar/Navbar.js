import React from 'react';
import 'tachyons';
import "./Navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Navbar = () => {
	return (
		<Router>
			<nav id="boi" className="bb b--black-10">
			<img src={require("./BIRO.png")} id="log" alt="loading" />
		      <div id="bla">
		              <Link to="/">
		              	<p className="f3 link pointer dib black dim mr3 mr4-ns">Home</p>
		              </Link>
		             <Link to="/forum">
			            <p className="f3 link pointer dib black dim mr3 mr4-ns">Posts</p>
			         </Link>
			        <Link to="/users">
			            <p to="/users" className="f3 link dib black dim mr3 mr4-ns pointer">Users</p>
			        </Link>
		        </div>
		     </nav>
		</Router>
		)
}

export default Navbar;
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'tachyons';
import "./Navbar.css";


const Navbar = () => {
	return (
		<Router>
			<nav id="boi" className="bb b--black-10">
			<img src={require("./BIRO.png")} id="log" />
		      <div id="bla" className="flex-grow pa3 flex">
		              <Link to="/" className="f3 link dib black dim mr3 mr4-ns">Home</Link>
		              <Link to="/about" className="f3 link dib black dim mr3 mr4-ns">About</Link>
		              <Link to="/users" className="f3 link dib black dim mr3 mr4-ns">Users</Link>
		        </div>
		        <Switch id="ele">
		          <Route path="/about">
		            <About />
		          </Route>
		          <Route path="/users">
		            <Users />
		          </Route>
		          <Route path="/">
		            <Home />
		          </Route>
		        </Switch>
		     </nav>
	    </Router>
		)
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default Navbar;
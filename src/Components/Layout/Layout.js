import React from 'react';
import Navbar from './LayoutParts/Navbar/Navbar';
import "./Layout.css";
import Sidebar from './LayoutParts/Sidebar/Sidebar';
import "../Main.css";
import PostList from "./LayoutParts/PostList/PostList";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Layout = ({ postLoad, isVisible }) => {
		return(
			<div>
				<Navbar />
				{ (isVisible===true)
					?<Sidebar />
					:<div></div>}
				<Router>
					<Switch>
						<Route path="/forum" component={() => <PostList postLoad={postLoad} />} />
					</Switch>
				</Router>
			</div>
		)
}

export default Layout;
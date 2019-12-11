import React from 'react';
import Navbar from './LayoutParts/Navbar/Navbar';
import "./Layout.css";
import Sidebar from './LayoutParts/Sidebar/Sidebar';
import "../Main.css";
import PostList from "./LayoutParts/PostList/PostList";
import PostCard from "./LayoutParts/PostCards/PostCards";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Layout = () => {
		return(
			<div>
				<Navbar />
				<Sidebar />
				<Router>
					<Switch>
						<Route path="/forum" component={PostList}/>
					</Switch>
				</Router>
			</div>
		)
}

export default Layout;
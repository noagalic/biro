import React from 'react';
import Navbar from './LayoutParts/Navbar/Navbar';
import "./Layout.css";
import Sidebar from './LayoutParts/Sidebar/Sidebar';
import "../Main.css";
import PostCard from "./LayoutParts/PostCards/PostCards";


const Layout = ({ onRouteChange, onInputChange, route}) => {
	const Routing = (route) => {
		const main = () => {
			return(
				<div>
					<Navbar onRouteChange = {onRouteChange} route = {route} />
					<Sidebar onInputChange = {onInputChange} />
					<div id="default">
						{Routing}
					</div>
				</div>
			)
		}
		if (route === "forum") {
			return(
				<div>
				{main}
				<PostCard />
				</div>
				)
		}
			else {
				console.log("nada")
			}
		}


		return(
			<div>
				<Navbar onRouteChange = {onRouteChange} route = {route} />
				<Sidebar onInputChange = {onInputChange} />
				<div id="default">
					{Routing}
				</div>
			</div>
		)
}

export default Layout;
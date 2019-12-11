import React from 'react';
import 'tachyons';
import "./PostCards.css";

const PostCard = ({ body, userid, title }) => {
	return(
		<div id="test" className="pa3 ma2 grow shadow-5">
			<img id="subLogo" src={require("./mat2.jpg")} />
			<p id="userName">u/{userid}</p>
			<h2 id="postTitle">{title}</h2>
			<div id="postBorder">
				<p id="postBody">{body}</p>
			</div>
			<div id="postInteract">
			</div>
		</div>
	)
}

export default PostCard; 
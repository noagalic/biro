import React from 'react';
import 'tachyons';
import "./PostCards.css";

const PostCard = ({ body }) => {
	return(
		<div id="test" className="pa3 ma2 grow shadow-5">
			<p>{body}</p>
		</div>
	)
}

export default PostCard; 
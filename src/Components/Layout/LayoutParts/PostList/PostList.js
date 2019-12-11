import React from 'react';
import PostCard from "../PostCards/PostCards";
import 'tachyons';
import "./PostList.css";

const PostList = ({ postLoad }) => {

	return(
		<div id="postList">
		{postLoad.map((post, i) => {
			return(
				<PostCard
				userid={postLoad[i].userId}
				title={postLoad[i].title}
				body={postLoad[i].body}
				/>
			);
		})
	}
	</div>
	);
}


export default PostList;
import React, { Component } from 'react';
import PostCard from "../PostCards/PostCards";
import 'tachyons';

async function fetchPosts() {
	const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await resp.json();
	const posts = [data];
	return(posts);
}

const posts = fetchPosts();

const PostList = () => {

/*	componentDidMount() {
	    fetch('https://jsonplaceholder.typicode.com/posts')
	    .then(response => response.json())
	    .then(posts => this.setState({ posts: posts }))
	  }*/
		return(
			<div>
				{posts.map((i) => {
					return(
						<PostCard
						body={posts[i].body}
						/>)
					})
				}
			</div>
		)
}


export default PostList;
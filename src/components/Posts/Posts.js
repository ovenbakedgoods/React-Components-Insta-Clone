import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(props)
  console.log(props.posts[0].username)
  return (
    
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {    
        props.posts.map((post, i) => (
          <Post key={"Posts-Map-" + i} post={post} likePost={props.likePost} />
        ))}
    </div>
  );
};

export default Posts;

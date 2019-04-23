import React from 'react';
import Post from './Post';

function Feed() {

  const masterPostList = [
    {
      title: "First",
      content: "First Content"
    },
    {
      title: "Second",
      content: "Second Content"
    }
  ];

  return (
    <div className="Feed">
      {masterPostList.map((post,index) =>
        <Post title={post.title}
          content={post.content}/>
      )}
    </div>
  );
}

export default Feed;

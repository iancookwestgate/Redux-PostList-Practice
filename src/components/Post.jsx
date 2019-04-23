import React from 'react';

function Post(props) {

  function upVote() {
    props.onVoteSubmit(props.id, 1);
  }
  function downVote() {
    props.onVoteSubmit(props.id, -1);
  }

  return (
    <div id={props.id} className="Post">
      <h1>{props.title}</h1>
      <h5>{props.user}</h5>
      <h3>{props.content}</h3>
      <h5>{props.votes}</h5>
      <button onClick={upVote}>Vote Up</button>
      <button onClick={downVote}>Vote Down</button>
    </div>
  );
}

export default Post;

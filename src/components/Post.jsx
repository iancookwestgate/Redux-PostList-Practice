import React from 'react';

function Post(props) {

  function upVote() {
    console.log(props.id)
    props.onVoteSubmit(props.id);

  }

  return (
    <div id={props.id} className="Post">
      <h1>{props.title}</h1>
      <h5>{props.user}</h5>
      <h3>{props.content}</h3>
      <h5>{props.votes}</h5>
      <button onClick={upVote}>Vote Up</button>
    </div>
  );
}

export default Post;

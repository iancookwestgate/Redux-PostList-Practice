import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';

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
      <h4>{props.formattedWaitTime} ago</h4>
      <button onClick={upVote}>Vote Up</button>
      <button onClick={downVote}>Vote Down</button>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  formattedWaitTime: PropTypes.string.isRequired
}

export default Post;

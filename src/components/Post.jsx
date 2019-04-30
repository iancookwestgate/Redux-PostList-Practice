import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Vote from './Vote';

function Post(props) {

  function upVote() {
    props.onVoteSubmit(props.id, 1, props.votes);
  }
  function downVote() {
    props.onVoteSubmit(props.id, -1, props.votes);
  }

  const PostStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 2px solid rgb(30,30,30);
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
  `;

  const ContentStyle = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `;

  return (
    <PostStyle id={props.id} className="Post">
      <Vote upVote={upVote} downVote={downVote} votes={props.votes}/>
      <ContentStyle>
        <h6>Posted by {props.user} {props.formattedWaitTime} ago</h6>
        <h1>{props.title}</h1>
        <h3>{props.content}</h3>
      </ContentStyle>
    </PostStyle>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  formattedWaitTime: PropTypes.string.isRequired
}

export default Post;

import React from 'react';
import './App.css';
import styled from 'styled-components';

function Vote(props) {

  const VoteStyle = styled.div`
    height: 100%;
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `;

  const ButtonStyle = styled.button`
    width: 100%;
    background-color: rgba(0,0,100,0.1);
    border-radius: 50%;
  `;

  return (
    <VoteStyle>
      <ButtonStyle onClick={props.upVote}>Up</ButtonStyle>
      <h5>{props.votes}</h5>
      <ButtonStyle onClick={props.downVote}>Down</ButtonStyle>
    </VoteStyle>
  );
}

export default Vote;

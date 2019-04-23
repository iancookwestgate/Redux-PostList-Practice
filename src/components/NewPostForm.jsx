import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPost(props){
  let _title = null;
  let _user = null;
  let _content = null;

  function handleSubmitNewPost(event) {
    event.preventDefault();
    props.onNewPostCreation({title: _title.value, user: _user.value, content: _content.value, votes: 0, id: v4()});
    _title.value ='';
    _user.value ='';
    _content.value ='';
  }

  return (
    <div >
      <form onSubmit={handleSubmitNewPost}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='user'
          placeholder='Author'
          ref={(input) => {_user = input;}}/>
        <input
          type='text'
          id='content'
          placeholder='Details'
          ref={(input) => {_content = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewPost.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPost;

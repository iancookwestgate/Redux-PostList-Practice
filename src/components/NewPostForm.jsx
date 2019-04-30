import React from 'react';
import { v4 } from 'uuid';
import Moment from 'moment';
import { connect } from 'react-redux';

function NewPostForm(props){
  let _title = null;
  let _user = null;
  let _content = null;

  function handleSubmitNewPost(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: null,
      title: _title.value,
      user: _user.value,
      content: _content.value,
      timeOpen: new Moment(),
      votes: 0
    };
    dispatch(action);
    props.onSubmitNewPost();
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

export default connect()(NewPostForm);

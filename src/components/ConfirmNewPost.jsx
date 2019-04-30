import React from 'react';
import PropTypes from 'prop-types';
function ConfirmNewPost(props){
  return (
    <div>
      <button onClick={props.onSubmitNewPost}>New Post</button>
    </div>
  );
}

ConfirmNewPost.propTypes = {
  onSubmitNewPost: PropTypes.func
};

export default ConfirmNewPost;

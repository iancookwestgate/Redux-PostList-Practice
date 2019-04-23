import React from 'react';
import Post from './Post';
import NewPostForm from './NewPostForm';
import ConfirmNewPost from './ConfirmNewPost';

class NewPostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleSubmitNewPost = this.handleSubmitNewPost.bind(this);
  }

  handleSubmitNewPost() {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let VisibleComponent = null;
    if (this.state.formVisibleOnPage) {
      VisibleComponent = <NewPostForm onNewPostCreation = {this.props.onSubmitNewPost} />;
    } else {
      VisibleComponent = <ConfirmNewPost onSubmitNewPost={this.handleSubmitNewPost} />;
    }
    return (
      <div>
        {VisibleComponent}
      </div>
    );
  }
}

export default NewPostControl;

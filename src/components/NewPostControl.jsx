import React from 'react';
import NewPostForm from './NewPostForm';
import ConfirmNewPost from './ConfirmNewPost';

class NewPostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleToggleForm = this.handleToggleForm.bind(this);
  }

  handleToggleForm() {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let VisibleComponent = null;
    if (this.state.formVisibleOnPage) {
      VisibleComponent = <NewPostForm onSubmitNewPost={this.handleToggleForm} />;
    } else {
      VisibleComponent = <ConfirmNewPost onSubmitNewPost={this.handleToggleForm} />;
    }
    return (
      <div>
        {VisibleComponent}
      </div>
    );
  }
}

export default NewPostControl;

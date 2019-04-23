import React from 'react';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.votes
    }
  }
  render() {
    return (
      <div className="Post">
        <h1>{this.props.title}</h1>
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

export default Post;

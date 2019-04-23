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
        <h5>{this.props.user}</h5>
        <h3>{this.props.content}</h3>
        <h5>{this.props.votes}</h5>
        <button>Vote Up</button>
      </div>
    );
  }
}

export default Post;

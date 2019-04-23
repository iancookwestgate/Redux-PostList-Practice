import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';
import NewPostControl from './NewPostControl';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      masterPostList: [
        {
          title: "First",
          user: "name",
          content: "First Content",
          votes: 0
        },
        {
          title: "Second",
          user: "name",
          content: "Second Content",
          votes: 0
        }
      ]
    }
    this.handleSubmitNewPost = this.handleSubmitNewPost.bind(this);
  }
  handleSubmitNewPost(newPost) {
    var newPostList = this.state.masterPostList.slice();
    newPostList.push(newPost);
    this.setState({masterPostList: newPostList});
  }

  

  render() {
    return (
      <div className="Feed">
        <NewPostControl postList={this.state.postList}  onSubmitNewPost={this.handleSubmitNewPost} />
        {this.state.masterPostList.map((post,index) =>
          <Post title={post.title}
            user={post.user}
            content={post.content}
            votes={post.votes}
            key={post.id}/>
        )}
      </div>
    );
  }
}

export default Feed;

import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';
import NewPostControl from './NewPostControl';
import Moment from 'moment';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      masterPostList: [
        {
          title: "First",
          user: "name",
          content: "First Content",
          id: "03f8b32a-2a3f-43f6-abac-0b857ffec32d",
          votes: 0,
          formattedWaitTime: (new Moment()).fromNow(true),
          timeOpen: new Moment()
        },
        {
          title: "Second",
          user: "name",
          content: "Second Content",
          id: "03f8b32a-2a3f-43f6-abac-0b857ffec32e",
          votes: 0,
          formattedWaitTime: (new Moment()).fromNow(true),
          timeOpen: new Moment()
        }
      ]
    }
    this.handleSubmitNewPost = this.handleSubmitNewPost.bind(this);
    this.handleVoteSubmit = this.handleVoteSubmit.bind(this);
  }
  handleSubmitNewPost(newPost) {
    var newPostList = this.state.masterPostList.slice();
    newPost.formattedWaitTime = (newPost.timeOpen).fromNow(true);
    newPostList.push(newPost);
    this.setState({masterPostList: newPostList});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  updateTicketElapsedWaitTime() {
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.forEach((post) =>
      post.formattedWaitTime = (post.timeOpen).fromNow(true)
    );
    this.setState({masterPostList: newMasterPostList});
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  handleVoteSubmit(id, dir) {
    var updateList = this.state.masterPostList.slice();
    updateList[id].votes += dir;
    updateList.sort((a,b) => b.votes - a.votes)
    this.setState({masterPostList: updateList});
    console.log(this.state);
  }

  render() {
    return (
      <div className="Feed">
        <NewPostControl onSubmitNewPost={this.handleSubmitNewPost} />
        {this.state.masterPostList.map((post,index) =>
          <Post title={post.title}
            user={post.user}
            content={post.content}
            votes={post.votes}
            id={index}
            formattedWaitTime={post.formattedWaitTime}
            onVoteSubmit={this.handleVoteSubmit}
            key={post.id}/>
        )}
      </div>
    );
  }
}

export default Feed;

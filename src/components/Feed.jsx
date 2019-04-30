import React from 'react';
import Post from './Post';
import NewPostControl from './NewPostControl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleVoteSubmit = this.handleVoteSubmit.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  updateTicketElapsedWaitTime() {
    let newMasterPostList = {...this.props.masterPostList};
    Object.keys(newMasterPostList).forEach((post) =>
      newMasterPostList[post].formattedWaitTime = (newMasterPostList[post].timeOpen).fromNow(true)
    );
    this.setState({masterPostList: newMasterPostList});
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  handleVoteSubmit(id, dir, votes) {
    const { dispatch } = this.props;
    const action = {
      type: 'ADD_VOTE',
      id: id,
      dir: dir,
      votes: votes
    };
    dispatch(action);
  }

  render() {
    return (
      <div className="Feed">
        <NewPostControl/>
        {Object.keys(this.props.masterPostList).map((post,index) =>
          <Post title={this.props.masterPostList[post].title}
            user={this.props.masterPostList[post].user}
            content={this.props.masterPostList[post].content}
            votes={this.props.masterPostList[post].votes}
            id={this.props.masterPostList[post].id}
            formattedWaitTime={this.props.masterPostList[post].formattedWaitTime}
            onVoteSubmit={this.handleVoteSubmit}
            key={index}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    votes: state.votes
  }
}

Feed.propTypes = {
  masterPostList: PropTypes.object
}

export default connect(mapStateToProps)(Feed);

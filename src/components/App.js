import React from 'react';
import Head from './Head';
import NewPostForm from './NewPostForm';
import Body from './Body';
import NewPostControl from './NewPostControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

class App extends React.Component {
  constructor() {
    super();

    this.handleSubmitNewPost = this.handleSubmitNewPost.bind(this);
  }

  handleSubmitNewPost(newPost) {
    var newPostList = this.state.postList.slice();
    newPostList.push(newPost);
    this.setState({postList: newPostList});
  }

  render() {
    return (
      <div>
        <Head/>
        <Switch>
          <Route exact path='/' component={Body} />
          <Route path='/newpost' render={()=><NewPostControl />}  />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;

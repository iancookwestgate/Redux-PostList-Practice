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
    this.state = {
      postList: [
        {
          title: 'three.js',
          user: 'Mr.doob',
          content: 'A JavaScript library which gives you the power to model 3D objects'
        },
        {
          title: 'Future Goals',
          user: 'Travis Toal',
          content: 'I want to use three.js to model a solar system, and eventually the physics of a black hole.'
        },
        {
          title: 'Resources / Inspirations',
          user: 'oseiskar / Darryl Huffman',
          content: 'Two projects which have functionality similar to what I want are <a href="https://oseiskar.github.io/black-hole/">oseiskars\'s</a> and <a href="https://codepen.io/darrylhuffman/details/gRZrpv">Darryl Huffman\'s</a> black hole sites.'
        }
      ]
    };
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
          <Route path='/newpost' render={()=><NewPostControl postList={this.state.postList}  onSubmitNewPost={this.handleSubmitNewPost} />}  />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;

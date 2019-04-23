import React from 'react';
import Head from './Head';
import NewPostForm from './NewPostForm';
import Body from './Body';
import NewPostControl from './NewPostControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <Head/>
      <Switch>
        <Route exact path='/' component={Body} />
        // <Route path='/newpost' render={()=><NewPostControl />}  />
        <Route component={Error404} />
      </Switch>
    </div>
  );

}

export default App;

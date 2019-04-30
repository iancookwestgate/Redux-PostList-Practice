import React from 'react';
import Head from './Head';
import Body from './Body';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div>
      <Head/>
      <Switch>
        <Route exact path='/' render={()=><Body store={props.store}/>} />
        <Route component={Error404} />
      </Switch>
    </div>
  );

}

export default withRouter(connect()(App));

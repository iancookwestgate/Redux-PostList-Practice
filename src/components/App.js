import React from 'react';
import Head from './Head';
import Body from './Body';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <Head/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route component={Error404} />
      </Switch>
    </div>
  );

}

export default App;

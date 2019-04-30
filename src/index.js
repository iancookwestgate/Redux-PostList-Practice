import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import postListReducer from './reducers/post-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(postListReducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);


const render = (Component) => {
  ReactDOM.render(
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>,
    document.getElementById('root')
  );
};

render(App);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

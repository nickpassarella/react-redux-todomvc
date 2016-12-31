import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

require('todomvc-app-css/index.css');

import reducer from './reducers/appReducer';

import App from './components/App';

const store = createStore(reducer);
const render = () => {
  const {todos, visibilityFilter} = store.getState();
  ReactDOM.render(
    <App
      store={store}
      todos={todos}
      filter={visibilityFilter}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

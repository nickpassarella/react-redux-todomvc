import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

require('todomvc-app-css/index.css');

import reducer from './reducers/todosReducer';

import App from './components/App';

const store = createStore(reducer);
const render = () => {
  ReactDOM.render(
    <App
      store={store}
      todos={store.getState()}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

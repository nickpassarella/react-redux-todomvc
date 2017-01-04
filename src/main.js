import React, { Component } from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';

import 'todomvc-app-css/index.css';

import Root from './components/Root';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);

import React, {Component} from 'react';
import Header from './Header';
import VisibleTodos from './VisibleTodos';
import FooterContainer from './FooterContainer';

const App = () => (
  <div className='todoapp'>
    <Header />
    <VisibleTodos />
    <FooterContainer />
  </div>
);

export default App;

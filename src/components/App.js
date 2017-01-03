import React, {Component} from 'react';
import Header from './Header';
import VisibleTodos from './VisibleTodos';
// import Footer from './Footer';

const App = () => (
  <div className='todoapp'>
    <Header />
    <VisibleTodos />
  </div>
);

export default App;

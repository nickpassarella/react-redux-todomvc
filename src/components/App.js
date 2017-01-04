import React, {Component} from 'react';
import Header from './Header';
import VisibleTodos from './VisibleTodos';
import FooterContainer from './FooterContainer';

const App = ({ params }) => (
  <div className='todoapp'>
    <Header />
    <VisibleTodos
      filter={params.filter || 'all'}
    />
    <FooterContainer />
  </div>
);

export default App;

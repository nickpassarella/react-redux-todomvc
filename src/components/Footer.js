import React from 'react';
import Filters from './Filters';

const Footer = ({
  incompleteTodoCount,
  clearCompletedTodos
}) => {
  return (
  <footer className='footer'>
    <span className='todo-count'>
      <strong>{incompleteTodoCount}</strong>
      { incompleteTodoCount === 1 ? ' todo ' : ' todos '}
      left
    </span>
    < Filters
      currentVisibilityFilter={1}
      setVisibilityFilter={1}
    />
    <button
      className='clear-completed'
      onClick={() => clearCompletedTodos()}
    >
    Clear completed
    </button>
  </footer>
)};

export default Footer;

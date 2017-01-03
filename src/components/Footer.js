import React from 'react';
import FilterList from './FilterList';

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
    < FilterList />
    <button
      className='clear-completed'
      onClick={() => clearCompletedTodos()}
    >
    Clear completed
    </button>
  </footer>
)};

export default Footer;

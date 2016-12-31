import React from 'react';

import Filters from './Filters';

const completeTodoCount = todos => {
  return todos.filter(todo => todo.completed);
};

const incompleteTodoCount = todos => {
  return todos.filter(todo => !todo.completed);
}

const Footer = ({
  todos,
  deleteCompletedTodos,
  currentVisibilityFilter,
  setVisibilityFilter
}) => {
  let incompleteTodosCount = todos.filter(todo => !todo.completed).length;
  let completeTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{incompleteTodosCount}</strong>
        {incompleteTodosCount === 1 ? ' item' : ' items'} left
      </span>
      < Filters
        currentVisibilityFilter={currentVisibilityFilter}
        setVisibilityFilter={setVisibilityFilter}
      />
      { completeTodosCount > 0 &&
        <button
          className='clear-completed'
          onClick={deleteCompletedTodos}
        >
        Clear completed
        </button>
      }
    </footer>
  );
};

export default Footer;

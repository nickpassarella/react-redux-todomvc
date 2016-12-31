import React from 'react';

const completeTodoCount = todos => {
  return todos.filter(todo => todo.completed);
};

const incompleteTodoCount = todos => {
  return todos.filter(todo => !todo.completed);
}

const Filters = ({
  todos,
  deleteCompletedTodos
}) => {
  let incompleteTodosCount = todos.filter(todo => !todo.completed).length;
  let completeTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{incompleteTodosCount}</strong>
        {incompleteTodosCount === 1 ? ' item' : ' items'} left
      </span>
      <ul className='filters'>
        <li>
          <a className='selected' href='#/'>All</a>
        </li>
        <li>
          <a href='#/active'>Active</a>
        </li>
        <li>
          <a href='#/completed'>Completed</a>
        </li>
      </ul>
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

export default Filters;

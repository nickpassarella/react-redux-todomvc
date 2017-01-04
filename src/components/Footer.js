import React from 'react';
import FilterList from './FilterList';

const Footer = ({
  incompleteTodoCount,
  completeTodoCount,
  clearCompletedTodos,
  currentFilter
}) => {
  const componentStyle = {};
  const todoTotal = completeTodoCount + incompleteTodoCount;

  componentStyle.display = (todoTotal === 0) ? 'none' : 'block';

  return (
    <footer
      className='footer'
      style={componentStyle}
    >
      <span className='todo-count'>
        <strong>{incompleteTodoCount}</strong>
        { incompleteTodoCount === 1 ? ' todo ' : ' todos '}
        left
      </span>
      < FilterList
        currentFilter={currentFilter}
      />
      { completeTodoCount > 0 &&
        <button
          className='clear-completed'
          onClick={() => clearCompletedTodos()}
        >
        Clear completed
        </button>
      }
    </footer>
  )
};

export default Footer;

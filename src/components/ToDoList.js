import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  onCheckboxToggle,
  onDelete
}) => (
  <div className='main'>
    <ul className='todo-list'>
      {todos.map(todo =>
        <TodoItem
          {...todo}
          key={todo.id}
          onCheckboxToggle={() => onCheckboxToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      )}
    </ul>
  </div>
);

export default TodoList;

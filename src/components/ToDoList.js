import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  updateTodoStatus,
  deleteTodo
}) => (
  <div className='main'>
    <ul className='todo-list'>
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          {...todo}
          onChange={() => updateTodoStatus(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
        />
      )}
    </ul>
  </div>
);

export default TodoList;

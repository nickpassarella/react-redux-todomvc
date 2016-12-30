import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({
  todos,
  updateTodoStatus
}) => (
  <div className="main">
    <ul className="todo-list">
      {todos.map(todo =>
        <ToDoItem
          key={todo.id}
          completed={todo.completed}
          text={todo.text}
          updateTodoStatus={updateTodoStatus}
        />
      )}
    </ul>
  </div>
);

export default ToDoList;

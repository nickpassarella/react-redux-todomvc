import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({
  todos,
  updateTodoStatus,
  deleteTodo
}) => (
  <div className="main">
    <ul className="todo-list">
      {todos.map(todo =>
        <ToDoItem
          key={todo.id}
          completed={todo.completed}
          text={todo.text}
          updateStatus={() => updateTodoStatus(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
        />
      )}
    </ul>
  </div>
);

export default ToDoList;

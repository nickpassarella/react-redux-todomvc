import React from 'react';

const ToDoItem = ({
  text,
  completed,
  updateTodoStatus
}) => (
  <li className={completed ? 'completed' : ''}>
    <div className="view">
      <input className="toggle" type="checkbox" defaultChecked={completed} onChange={updateTodoStatus} />
      <label>{text}</label>
      <button className="destroy" />
    </div>
  </li>
);

export default ToDoItem;

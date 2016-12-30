import React from 'react';

const ToDoItem = ({
  text,
  completed,
  updateStatus
}) => (
  <li className={completed ? 'completed' : ''}>
    <div className="view">
      <input className="toggle" type="checkbox" defaultChecked={completed} onChange={updateStatus} />
      <label>{text}</label>
      <button className="destroy" />
    </div>
  </li>
);

export default ToDoItem;

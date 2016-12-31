import React from 'react';

const ToDoItem = ({
  id,
  text,
  completed,
  updateStatus,
  onDelete
}) => (
  <li className={completed ? 'completed' : ''}>
    <div className='view'>
      <input className='toggle' type='checkbox' defaultChecked={completed} onChange={updateStatus} />
      <label>{text}</label>
      <button className='destroy' onClick={onDelete}/>
    </div>
  </li>
);

export default ToDoItem;

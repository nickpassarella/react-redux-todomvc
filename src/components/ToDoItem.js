import React from 'react';

const TodoItem = ({
  text,
  completed,
  onCheckboxToggle,
  onDelete
}) => (
  <li className={completed ? 'completed' : ''}>
    <div className='view'>
      <input className='toggle' type='checkbox' defaultChecked={completed} onChange={onCheckboxToggle} />
      <label>{text}</label>
      <button className='destroy' onClick={onDelete}/>
    </div>
  </li>
);

export default TodoItem;

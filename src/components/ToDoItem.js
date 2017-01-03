import React from 'react';

const TodoItem = ({
  text,
  completed,
  onChange,
  onDelete
}) => (
  <li className={completed ? 'completed' : ''}>
    <div className='view'>
      <input className='toggle' type='checkbox' defaultChecked={completed} onChange={onChange} />
      <label>{text}</label>
      <button className='destroy' onClick={onDelete}/>
    </div>
  </li>
);

export default TodoItem;

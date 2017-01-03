import React from 'react';

const Header = ({
  onKeyPress
}) => (
  <header className='header'>
    <h1>todos</h1>
    <input
      className='new-todo'
      placeholder='What needs to be done?'
      onKeyPress={onKeyPress}
      autoFocus />
  </header>
);

export default Header;

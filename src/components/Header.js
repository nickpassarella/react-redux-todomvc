import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const Header = ({
  dispatch
}) => (
  <header className='header'>
    <h1>todos</h1>
    <input
      className='new-todo'
      placeholder='What needs to be done?'
      onKeyPress={e => {
        if (e.key === 'Enter') {
          dispatch(addTodo(e.target.value, 1));
          e.target.value = '';
        }
      }}
      autoFocus
    />
  </header>
);

export default connect()(Header);

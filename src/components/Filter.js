import React from 'react';

const Filter = ({
  children,
  currentFilter,
  filter,
  setVisibilityFilter
}) => (
  <li>
    <a
      className={currentFilter === filter ? 'selected' : ''}
      href='#'
      onClick={event => {
        event.preventDefault();
        setVisibilityFilter(filter);
      }}
    >
      {children}
    </a>
  </li>
);

export default Filter;

import React from 'react';

const FilterLink = ({
  children,
  currentFilterState,
  filter,
  onClick
}) => (
  <li>
    <a
      className={currentFilterState === filter ? 'selected' : ''}
      href='#'
      onClick={event => {
        event.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  </li>
);

export default FilterLink;

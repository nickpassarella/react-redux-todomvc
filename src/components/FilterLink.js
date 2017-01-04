import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({
  children,
  currentFilterState,
  filter
}) => (
  <li>
    <Link
      className={currentFilterState === filter ? 'selected' : ''}
      to={filter === 'all' ? '' : filter}
    >
      {children}
    </Link>
  </li>
);

export default FilterLink;

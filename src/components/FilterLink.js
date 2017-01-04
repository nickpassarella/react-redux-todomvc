import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({
  children,
  selected,
  filter
}) => (
  <li>
    <Link
      className={selected ? 'selected' : ''}
      to={filter === 'all' ? '' : filter}
    >
      {children}
    </Link>
  </li>
);

export default FilterLink;

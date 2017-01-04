import React from 'react';
import FilterLink from './FilterLink';

const filters = ['All', 'Active', 'Completed'];

const FilterList = () => (
  <ul className='filters'>
    {filters.map((filter, index) =>
      <FilterLink
        key={index}
        filter={filter.toLowerCase()}
      >
        {filter}
      </FilterLink>
    )}
  </ul>
);

export default FilterList;

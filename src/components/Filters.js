import React from 'react';

import Filter from './Filter';
const filterTypes = [
  { type: 'SHOW_ALL', text: 'All' },
  { type: 'SHOW_ACTIVE', text: 'Active' },
  { type: 'SHOW_COMPLETED', text: 'Completed' }
];

const Filters = ({
  filter,
  currentVisibilityFilter,
  setVisibilityFilter
}) => (
  <ul className='filters'>
    {filterTypes.map(filter =>
      <Filter
        filter={filter.type}
        setVisibilityFilter={setVisibilityFilter}
        currentFilter={currentVisibilityFilter}
      >
        {filter.text}
      </Filter>
    )}
  </ul>
);

export default Filters;

import React from 'react';
import Filter from './Filter';

const filterTypes = [
  { type: 'SHOW_ALL', text: 'All' },
  { type: 'SHOW_ACTIVE', text: 'Active' },
  { type: 'SHOW_COMPLETED', text: 'Completed' }
];

const FilterList = () => (
  <ul className='filters'>
    {filterTypes.map((filter, index) =>
      <Filter
        key={index}
        filter={filter.type}
      >
        {filter.text}
      </Filter>
    )}
  </ul>
);

export default FilterList;

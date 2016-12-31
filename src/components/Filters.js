import React from 'react';

import Filter from './Filter';

const Filters = ({
  filter,
  currentVisibilityFilter,
  setVisibilityFilter
}) => (
  <ul className='filters'>
    <Filter
      filter='SHOW_ALL'
      setVisibilityFilter={setVisibilityFilter}
      currentFilter={currentVisibilityFilter}
    >
      All
    </Filter>
    <Filter
      filter='SHOW_ACTIVE'
      setVisibilityFilter={setVisibilityFilter}
      currentFilter={currentVisibilityFilter}
    >
      Active
    </Filter>
    <Filter
      filter='SHOW_COMPLETED'
      setVisibilityFilter={setVisibilityFilter}
      currentFilter={currentVisibilityFilter}
    >
      Completed
    </Filter>
  </ul>
);

export default Filters;

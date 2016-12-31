import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as actions from '../../src/actions/visibilityActions';
import reducer from '../../src/reducers/visibilityFilterReducer';

describe('Visibility Filter Reducer', () => {
  it('returns default state if no current state is passed', () => {
    expect(reducer(undefined, {})).to.equal('SHOW_ALL')
  });

  it('sets the filter state when a specific filter is dispatched', () => {
    let beforeState = 'SHOW_ALL';
    let afterState = 'SHOW_COMPLETED';
    deepFreeze(beforeState);

    expect(reducer(beforeState, actions.setVisibilityFilter('SHOW_COMPLETED'))).to.equal(afterState);
  });
});

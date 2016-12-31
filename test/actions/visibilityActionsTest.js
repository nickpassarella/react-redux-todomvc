import { expect } from 'chai';
import * as actions from '../../src/actions/visibilityActions';

describe('Visibility Actions -', () => {
  describe('setVisibilityFilter', () => {
    it('returns the proper action', () => {
      let expectedAction = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL'
      };

      expect(actions.setVisibilityFilter('SHOW_ALL')).to.deep.equal(expectedAction);
    });
  });
});

import { expect } from 'chai';
import * as actions from '../../src/actions/visibilityActions';

describe('Visibility Actions -', () => {
  describe('showAll', () => {
    it('returns the proper action', () => {
      let expectedAction = {
        type: 'SHOW_ALL'
      };

      expect(actions.showAll()).to.deep.equal(expectedAction);
    });
  });

  describe('showActive', () => {
    it('returns the proper action', () => {
      let expectedAction = {
        type: 'SHOW_ACTIVE'
      };

      expect(actions.showActive()).to.deep.equal(expectedAction);
    });
  });

  describe('showCompleted', () => {
    it('returns the proper action', () => {
      let expectedAction = {
        type: 'SHOW_COMPLETED'
      };

      expect(actions.showCompleted()).to.deep.equal(expectedAction);
    });
  });
});

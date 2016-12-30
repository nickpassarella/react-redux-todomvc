import { expect } from 'chai';
import * as actions from '../../src/actions/todoActions';

describe('Todo Actions -', () => {
  describe('addTodo', () => {
    it('returns the proper action', () => {
      let expectedAction = {
        type: 'ADD_TODO',
        text: 'test'
      };

      expect(actions.addTodo('test')).to.deep.equal(expectedAction);
    });
  });

  describe('toggleTodo', () => {
    it('returns the proper action', () => {
      let expectedAction = {
        type: 'TOGGLE_TODO',
        id: 1
      };

      expect(actions.toggleTodo(1)).to.deep.equal(expectedAction);
    });
  });
});

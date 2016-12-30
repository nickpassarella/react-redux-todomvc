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

  describe('deleteTodo', () => {
    it('returns the proper action', () => {
      let expectedAction = {
        type: 'DELETE_TODO',
        id: 1
      };

      expect(actions.deleteTodo(1)).to.deep.equal(expectedAction);
    });
  });

  describe('deleteCompletedTodos', () => {
    it('returns the proper action', () => {
      let expectedAction = {
        type: 'DELETE_COMPLETED_TODOS'
      };

      expect(actions.deleteCompletedTodos()).to.deep.equal(expectedAction);
    });
  });
});

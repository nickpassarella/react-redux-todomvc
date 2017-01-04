import { expect } from 'chai';
import * as actions from '../../src/actions';

describe('Todo Actions -', () => {
  describe('addTodo', () => {

    it ('should create a unique ID for a todo if no id is passed to the action creator', () => {
      let action = actions.addTodo('do it!');
      expect(action).to.be.an('object');
      expect(action.id).to.be.a('string');

      let secondAction = actions.addTodo('do it again!');
      expect(action.id).not.to.equal(secondAction.id);
    });

    it('returns the proper action', () => {
      let expectedAction = {
        type: 'ADD_TODO',
        id: 1,
        text: 'test'
      };

      expect(actions.addTodo('test', 1)).to.deep.equal(expectedAction);
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

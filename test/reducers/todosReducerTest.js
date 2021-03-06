import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as actions from '../../src/actions';
import reducer from '../../src/reducers/todosReducer';

describe('Todos Reducer', () => {
  it('returns default state if no current state is passed', () => {
    expect(reducer(undefined, {})).to.deep.equal([])
  });

  it('can add a first todo', () => {
    let beforeState = [];
    let afterState = [{ id: 1, text: 'do it!', completed: false }];
    deepFreeze(beforeState);

    expect(reducer(beforeState, actions.addTodo('do it!', 1))).to.deep.equal(afterState);
  });

  it('can add a second todo', () => {
    let beforeState = [{ id: 1, text: 'do it!', completed: false }];
    let afterState = [
      { id: 1, text: 'do it!', completed: false },
      { id: 2, text: 'just do it!', completed: false }
    ];
    deepFreeze(beforeState);

    expect(reducer(beforeState, actions.addTodo('just do it!', 2))).to.deep.equal(afterState);
  });

  it('can toggle an incomplete todo to be completed', () => {
    let beforeState = [
      { id: 1, text: 'do it!', completed: false },
      { id: 2, text: 'just do it!', completed: false }
    ];
    let afterState = [
      { id: 1, text: 'do it!', completed: true },
      { id: 2, text: 'just do it!', completed: false }
    ];
    deepFreeze(beforeState);

    expect(reducer(beforeState, actions.toggleTodo(1))).to.deep.equal(afterState);
  });

  it('can toggle an complete todo to be incomplete', () => {
    let beforeState = [
      { id: 1, text: 'do it!', completed: true },
      { id: 2, text: 'just do it!', completed: false }
    ];
    let afterState = [
      { id: 1, text: 'do it!', completed: false },
      { id: 2, text: 'just do it!', completed: false }
    ];
    deepFreeze(beforeState);

    expect(reducer(beforeState, actions.toggleTodo(1))).to.deep.equal(afterState);
  });

  it('can delete a todo', () => {
    let beforeState = [
      { id: 1, text: 'do it!', completed: true },
      { id: 2, text: 'just do it!', completed: false }
    ];
    let afterState = [
      { id: 2, text: 'just do it!', completed: false }
    ];
    deepFreeze(beforeState);

    expect(reducer(beforeState, actions.deleteTodo(1))).to.deep.equal(afterState);
  });

  it('can clear completed todos', () => {
    let beforeState = [
      { id: 1, text: 'do it!', completed: true },
      { id: 2, text: 'just do it!', completed: true },
      { id: 3, text: 'don\'t let your dreams be dreams.', completed: false }
    ];
    let afterState = [
      { id: 3, text: 'don\'t let your dreams be dreams.', completed: false }
    ];
    deepFreeze(beforeState);

    expect(reducer(beforeState, actions.deleteCompletedTodos())).to.deep.equal(afterState);
  });
});

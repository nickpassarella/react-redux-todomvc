import { expect } from 'chai';
import * as actions from '../../src/actions/todoActions';
import reducer from '../../src/reducers/todosReducer';

describe('Todos Reducer', () => {
  it('returns default state if no current state is passed', () => {
    expect(reducer(undefined, {})).to.deep.equal([])
  });
  it('can add a first todo', () => {
    let afterState = [{ id: 1, text: 'do it!', completed: false }];

    expect(reducer([], actions.addTodo('do it!'))).to.deep.equal(afterState);
  });
  xit('can add a second todo', () => {
    let beforeState = [{ id: 1, text: 'do it!' }];

    let afterState = [
      { id: 1, text: 'do it!', completed: false },
      { id: 2, text: 'just do it!', completed: false }
    ];

    expect(reducer(beforeState, actions.addTodo('just do it!'))).to.deep.equal(afterState);
  });
  xit('can toggle an incomplete todo to be completed', () => {
    let beforeState = [
      { id: 1, text: 'do it!', completed: false },
      { id: 2, text: 'just do it!', completed: false }
    ];

    let afterState = [
      { id: 1, text: 'do it!', completed: true },
      { id: 2, text: 'just do it!', completed: false }
    ];

    expect(reducer(beforeState, actions.toggleTodo(1))).to.deep.equal(afterState);
  });
  xit('can toggle an complete todo to be incomplete', () => {
    let beforeState = [
      { id: 1, text: 'do it!', completed: true },
      { id: 2, text: 'just do it!', completed: false }
    ];

    let afterState = [
      { id: 1, text: 'do it!', completed: false },
      { id: 2, text: 'just do it!', completed: false }
    ];

    expect(reducer(beforeState, actions.toggleTodo(1))).to.deep.equal(afterState);
  });
});

import { generate } from 'shortid';

export const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  id: generate(),
  text
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
});

export const deleteCompletedTodos = () => ({
  type: 'DELETE_COMPLETED_TODOS'
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

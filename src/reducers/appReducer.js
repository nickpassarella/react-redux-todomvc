import { combineReducers } from 'redux';
import todos from './todosReducer';
import visibilityFilter from './visibilityFilterReducer';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;

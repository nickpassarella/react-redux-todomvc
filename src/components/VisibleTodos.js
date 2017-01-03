import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_ALL':
      return todos;
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  onCheckboxToggle(id) {
    dispatch(toggleTodo(id));
  },
  onDelete(id) {
    dispatch(deleteTodo(id));
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;

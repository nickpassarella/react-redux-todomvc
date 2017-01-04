import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'completed':
      return todos.filter(todo => todo.completed);
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'all':
      return todos;
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state.todos,
    ownProps.filter
  ),
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

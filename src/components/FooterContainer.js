import { connect } from 'react-redux';
import { deleteCompletedTodos } from '../actions';

import Footer from './Footer';

const mapStateToProps = (state, ownProps) => ({
  incompleteTodoCount: state.todos.filter(todo => !todo.completed).length,
  completeTodoCount: state.todos.filter(todo => todo.completed).length,
  currentFilter: ownProps.filter
});

const mapDispatchToProps = (dispatch) => ({
  clearCompletedTodos() {
    dispatch(deleteCompletedTodos())
  }
});

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default FooterContainer;

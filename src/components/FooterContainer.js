import { connect } from 'react-redux';
import { deleteCompletedTodos } from '../actions';

import Footer from './Footer';

const mapStateToProps = (state) => ({
  incompleteTodoCount: state.todos.filter(todo => !todo.completed).length
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

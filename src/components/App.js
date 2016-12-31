import React, {Component} from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import Footer from './Footer';

import * as todoActions from '../actions/todoActions';
import * as visibilityActions from '../actions/visibilityActions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

export default class App extends Component {
  enterKeyAddsTodo(event) {
    if (event.key === 'Enter') {
      this.props.store.dispatch(todoActions.addTodo(event.target.value));
      event.target.value = '';
    }
  }

  updateTodoStatus(todoId) {
    this.props.store.dispatch(todoActions.toggleTodo(todoId));
  }

  deleteTodo(todoId) {
    this.props.store.dispatch(todoActions.deleteTodo(todoId));
  }

  deleteCompletedTodos() {
    this.props.store.dispatch(todoActions.deleteCompletedTodos());
  }

  setVisibilityFilter(filter) {
    this.props.store.dispatch(visibilityActions.setVisibilityFilter(filter));
  }

  render() {
    const {todos, filter} = this.props;
    const filteredTodos = getVisibleTodos(todos, filter);

    return (
      <div className='todoapp'>
        <Header onInputKeyPress={this.enterKeyAddsTodo.bind(this)} />
        <ToDoList
          todos={filteredTodos}
          updateTodoStatus={this.updateTodoStatus.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
        { todos.length > 0 &&
          <Footer
            todos={filteredTodos}
            currentVisibilityFilter={filter}
            setVisibilityFilter={this.setVisibilityFilter.bind(this)}
            deleteCompletedTodos={this.deleteCompletedTodos.bind(this)}
          />
        }
      </div>
    )
  }
}

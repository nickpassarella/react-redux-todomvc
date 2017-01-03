import React, {Component} from 'react';
import Header from './Header';
import TodoList from './TodoList';
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
  constructor(props) {
    super(props)
    this.todoCounter = 1;
  }

  render() {
    const {store, todos, filter} = this.props;
    const filteredTodos = getVisibleTodos(todos, filter);

    return (
      <div className='todoapp'>
        <Header onKeyPress={event => {
          if (event.key === 'Enter') {
            store.dispatch(todoActions.addTodo(event.target.value, this.todoCounter++));
            event.target.value = '';
          }
          }}
        />
        <TodoList
          todos={filteredTodos}
          updateTodoStatus={id => {
            store.dispatch(todoActions.toggleTodo(id));
          }}
          deleteTodo={id => {
            store.dispatch(todoActions.deleteTodo(id));
          }}
        />
        { todos.length > 0 &&
          <Footer
            todos={todos}
            currentVisibilityFilter={filter}
            setVisibilityFilter={filter => {
              store.dispatch(visibilityActions.setVisibilityFilter(filter));
            }}
            deleteCompletedTodos={() => {
              store.dispatch(todoActions.deleteCompletedTodos());
            }}
          />
        }
      </div>
    )
  }
}

import React, {Component} from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import Filters from './Filters';


export default class App extends Component {
  enterKeyAddTodo(e) {
    if (e.key === 'Enter') {
      this.props.store.dispatch({
        type: 'ADD_TODO',
        text: e.target.value
      });
      e.target.value = '';
    }
  }

  updateTodoStatus(todoId) {
    this.props.store.dispatch({
      type: 'TOGGLE_TODO',
      id: todoId
    });
  }

  deleteTodo(todoId) {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: todoId
    });
  }

  deleteCompletedTodos() {
    this.props.store.dispatch({
      type: 'DELETE_COMPLETED_TODOS'
    });
  }

  render() {
    let { todos } = this.props;
    return (
      <div className='todoapp'>
        <Header onInputKeyPress={this.enterKeyAddTodo.bind(this)} />
        <ToDoList
          todos={todos}
          updateTodoStatus={this.updateTodoStatus.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
        { todos.length > 0 &&
          <Filters
            todos={todos}
            deleteCompletedTodos={this.deleteCompletedTodos.bind(this)}
          />
        }
      </div>
    )
  }
}

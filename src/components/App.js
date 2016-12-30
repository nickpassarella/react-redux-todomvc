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

  render() {
    return (
      <div className='todoapp'>
        <Header onInputKeyPress={this.enterKeyAddTodo.bind(this)} />
        <ToDoList
          todos={this.props.todos}
          updateTodoStatus={this.updateTodoStatus.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
        <Filters count={this.props.todos.length}/>
      </div>
    )
  }
}

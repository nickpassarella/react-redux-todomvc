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

  updateTodoStatus(e) {
    console.log(e)
  }

  render() {
    return (
      <div className='todoapp'>
        <Header onInputKeyPress={this.enterKeyAddTodo.bind(this)} />
        <ToDoList todos={this.props.todos} updateTodoStatus={this.updateTodoStatus.bind(this)}/>
        <Filters count={this.props.todos.length}/>
      </div>
    )
  }
}

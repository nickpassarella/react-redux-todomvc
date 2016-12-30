import React, {Component} from 'react';
import ToDoList from './ToDoList';
import Filters from './Filters';

export default class App extends Component {
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.store.dispatch({
        type: 'ADD_TODO',
        text: e.target.value
      });
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyPress={this.handleKeyPress.bind(this)}
            autoFocus />
        </header>
        <ToDoList todos={this.props.todos} />
        <Filters />
      </div>
    )
  }
}

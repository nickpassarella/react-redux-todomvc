const initialState = [];

let todoCounter = 1;

const newTodo = (text, id) => ({
  text,
  id,
  completed: false
});

const toggleTodo = (todo, actionId) => {
  if (todo.id !== actionId) {
    return todo;
  } else {
    return {
      ...todo,
      completed: !todo.completed
    };
  }
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, newTodo(action.text, action.id)];
    case 'TOGGLE_TODO':
      return state.map(todo => toggleTodo(todo, action.id));
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'DELETE_COMPLETED_TODOS':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

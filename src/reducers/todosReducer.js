const initialState = [];

let todoCounter = 1;

const newTodo = text => ({
  text: text,
  id: todoCounter++,
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
      return [...state, newTodo(action.text)];
    case 'TOGGLE_TODO':
      return state.map(todo => toggleTodo(todo, action.id));
    default:
      return state;
  }
};

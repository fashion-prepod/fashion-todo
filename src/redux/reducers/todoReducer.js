import { TODO } from "../actions/types";
import { TODOS } from "../../constants";

const storageData = localStorage.getItem(TODOS);

let initialTodos = [];

if (storageData !== null) {
  initialTodos = JSON.parse(storageData);
}

const initialState = {
  todos: initialTodos,
  isLoading: false,
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO.TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload.id),
      };
    case TODO.TODO_DONE:
      return {
        ...state,
        todos: state.todos.map(({ id, done, ...todo }) => ({
          ...todo,
          id,
          done: id === action.payload.id ? !done : done,
        })),
      };
    case TODO.TODO_ADD:
      const todo = {
        todoText: action.payload.todoText,
        done: false,
        id: Math.random().toString(),
      };

      return {
        ...state,
        todos: [...state.todos, todo],
      };
    case TODO.TODO_EDIT:
      return {
        ...state,
        todos: state.todos.map(({ id, todoText, ...todo }) => ({
          ...todo,
          id,
          todoText:
            id === action.payload.id ? action.payload.todoText : todoText,
        })),
      };
    default:
      return state;
  }
};

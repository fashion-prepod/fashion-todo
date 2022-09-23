import { TODO } from "../actions/types";
import { TODOS, FILTER_CONFIG } from "../../constants";

const storageData = localStorage.getItem(TODOS);

let initialTodos = [];

if (storageData !== null) {
  initialTodos = JSON.parse(storageData);
}

const initialState = {
  todos: initialTodos,
  isLoading: false,
  error: null,
  filter: FILTER_CONFIG.ALL,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case TODO.TODO_FETCH_COMPLETE:
      return {
        ...state,
        todos: action.payload.todos,
      };
    case TODO.TODO_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
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
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };

    case TODO.TODO_FILTER:
      return {
        ...state,
        filter: action.payload.filterType,
      };
    default:
      return state;
  }
};

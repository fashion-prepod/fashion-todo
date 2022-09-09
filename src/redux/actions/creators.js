import { TODO } from "./types";
import { bindActionCreators } from "redux";
import { store } from "../index";

const addTodo = (todoText) => ({
  type: TODO.TODO_ADD,
  payload: {
    todoText,
  },
});

const deleteTodo = (id) => ({
  type: TODO.TODO_DELETE,
  payload: {
    id,
  },
});

const editTodo = (id, todoText) => ({
  type: TODO.TODO_EDIT,
  payload: {
    id,
    todoText,
  },
});

const todoStatusChange = (id) => ({
  type: TODO.TODO_DONE,
  payload: { id },
});

export default bindActionCreators(
  {
    addTodo,
    deleteTodo,
    editTodo,
    todoStatusChange,
  },
  store.dispatch
);

import { FILTER_CONFIG } from "../../constants";
import { createSelector } from "reselect";

export const getTodos = ({ todos: { todos } }) => todos;
export const getFilter = (state) => state.todos.filter;
export const getIsLoading = ({ todos: { isLoading } }) => isLoading;

export const getTodosByFilter = createSelector(
  getTodos,
  getFilter,
  (todos, filter) => {
    return filter === FILTER_CONFIG.ALL
      ? todos
      : todos.filter(
          ({ done }) =>
            (done && filter === FILTER_CONFIG.DONE) ||
            (!done && filter === FILTER_CONFIG.UNDONE)
        );
  }
);

export const getUser = (state) => state.user.user;
export const getUserEmail = (state) => state.user.user?.email;


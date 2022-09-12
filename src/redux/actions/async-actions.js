import { TODO } from "./types";

export const loadTodos = () => {
  return (dispatch, getState) => {
    dispatch({
      type: TODO.TODO_LOADING,
      payload: {
        isLoading: true,
      },
    });

    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((todos) => {
        dispatch({
          type: TODO.TODO_FETCH_COMPLETE,
          payload: {
            todos,
          },
        });
      })
      .finally(() => {
        dispatch({
          type: TODO.TODO_LOADING,
          payload: {
            isLoading: false,
          },
        });
      });
  };
};

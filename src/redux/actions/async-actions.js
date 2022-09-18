import { TODO, USER } from "./types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const USER_AUTH_CONFIG = {
  register: createUserWithEmailAndPassword,
  signin: signInWithEmailAndPassword
}

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

// createUserWithEmailAndPassword(auth, 'test@gmail.com', '1234567A!');

export const userAuth = (
  email,
  password,
  type = 'register',
  // afterAuth
) => {
  return (dispatch) => {

    dispatch({
      type: USER.USER_LOADING,
      payload: {
        isLoading: true,
      }
    });

    USER_AUTH_CONFIG[type](auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      dispatch({
        type: USER.USER_LOGIN,
        payload: {
          user
        }
      });
      // afterAuth && afterAuth();
    })
    .catch((error) => {
      dispatch({
        type: USER.USER_ERROR,
        payload: {error}
      });
    })
    .finally(() => {
      dispatch({
        type: USER.USER_LOADING,
        payload: {
          isLoading: false
        }
      });

      
    })
  };
};
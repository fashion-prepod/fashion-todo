import { TODO, USER } from "./types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

const USER_AUTH_CONFIG = {
  register: createUserWithEmailAndPassword,
  signin: signInWithEmailAndPassword,
};

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
  type = "register"
  // afterAuth
) => {
  return (dispatch) => {
    dispatch({
      type: USER.USER_LOADING,
      payload: {
        isLoading: true,
      },
    });

    USER_AUTH_CONFIG[type](auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({
          type: USER.USER_LOGIN,
          payload: {
            user,
          },
        });
        // afterAuth && afterAuth();
        return user;
      })
      .then((user) => {
        return setDoc(doc(db, "users", user.uid), {
          id: user.uid,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER.USER_ERROR,
          payload: { error },
        });
      })
      .finally(() => {
        dispatch({
          type: USER.USER_LOADING,
          payload: {
            isLoading: false,
          },
        });
      });
  };
};

export const userLogout = () => {
  return (dispatch) => {
    auth.signOut();

    dispatch({
      type: USER.USER_SIGNOUT,
    });
  };
};

export const addTodo = (todoText) => {
  return (dispatch, getState) => {
    const {
      user: { user: uid },
    } = getState();

    const todo = {
      todoText,
      done: false,
    };

    const userTodoCollection = collection(db, `users/${uid}/todos`);
    // setDoc(userTodoCollection, {
    //   todoText,
    //   done: false,
    // });

    addDoc(userTodoCollection, {
      name: "Tokyo",
      country: "Japan",
    });

    dispatch({
      type: TODO.TODO_ADD,
      payload: {
        todo,
      },
    });
  };
};

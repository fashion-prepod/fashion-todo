import { TODO, USER } from "./types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  query,
  getDocs,
} from "firebase/firestore";

const USER_AUTH_CONFIG = {
  register: createUserWithEmailAndPassword,
  signin: signInWithEmailAndPassword,
};

export const loadTodos = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: TODO.TODO_LOADING,
      payload: {
        isLoading: true,
      },
    });

    const {
      user: {
        user: { uid },
      },
    } = getState();

    const userTodoCollectionReference = collection(db, `users/${uid}/todos`);
    const todosQuery = query(userTodoCollectionReference);
    const todosCollectionData = await getDocs(todosQuery);

    if (todosCollectionData.size) {
      let arr = [];
      todosCollectionData.forEach((todo) => {
        console.log(todo.data());
        arr.push({
          id: todo.id,
          ...todo.data(),
        });
      });

      dispatch({
        type: TODO.TODO_FETCH_COMPLETE,
        payload: {
          todos: arr,
        },
      });
    } else {
      dispatch({
        type: TODO.TODO_FETCH_COMPLETE,
        payload: {
          todos: [],
        },
      });
    }

    dispatch({
      type: TODO.TODO_LOADING,
      payload: {
        isLoading: false,
      },
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
      user: {
        user: { uid },
      },
    } = getState();

    const userTodoCollection = collection(db, `users/${uid}/todos`);

    const todo = {
      todoText,
      done: false,
    };

    addDoc(userTodoCollection, todo);

    dispatch({
      type: TODO.TODO_ADD,
      payload: {
        todo,
      },
    });
  };
};

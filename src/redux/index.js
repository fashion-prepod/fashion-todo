import { createStore, applyMiddleware, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";

const middlewares = [thunk];

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

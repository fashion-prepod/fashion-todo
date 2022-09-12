import { createStore, applyMiddleware } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// const rootReducer = {
// 	todo: todoReducer,
// 	user: userReducer
// };

const middlewares = [thunk];

export const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

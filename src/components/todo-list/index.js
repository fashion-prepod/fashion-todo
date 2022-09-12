import React from "react";
import { TodoItem } from "../todo-item";
import { getTodosByFilter, getIsLoading } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { ReactComponent as Preloader } from "../../images/preloader.svg";
import styles from "./index.module.css";

export const TodoList = () => {
  const todos = useSelector(getTodosByFilter);
  const isLoading = useSelector(getIsLoading);

  return (
    <ul className={styles.wrapper}>
      {isLoading ? (
        <Preloader />
      ) : (
        todos.map(({ id, ...otherProps }) => (
          <TodoItem key={id} id={id} {...otherProps} />
        ))
      )}
    </ul>
  );
};

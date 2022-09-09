import React from "react";
import { TodoItem } from "../todo-item";
import { getTodos } from "../../redux/selectors";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const TodoList = () => {
  const todos = useSelector(getTodos);

  return (
    <ul className={styles.wrapper}>
      {todos.map(({ id, ...otherProps }) => (
        <TodoItem key={id} id={id} {...otherProps} />
      ))}
    </ul>
  );
};

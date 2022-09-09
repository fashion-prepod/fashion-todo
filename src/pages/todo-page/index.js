import React, { useState, useCallback, useMemo, useRef } from "react";
import { UserInput } from "../../components/user-input";
import { TodoList } from "../../components/todo-list";
import { TodoFilter } from "../../components/todo-filter";
import { FILTER_CONFIG } from "../../components/todo-filter/constants";
import { getTodosByFilter } from "../../utils/getTodosByFilter";
import { storeTodos } from "../../utils/storeTodos";
import styles from "./index.module.css";

export const TodoPage = () => {
  const todoInputRef = useRef();

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <UserInput />
      </div>
      <div className={styles.rightSide}>
        <TodoFilter />
        <TodoList />
      </div>
    </div>
  );
};

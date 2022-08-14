import React from "react";
import { TodoItem } from "../todo-item";
import styles from './index.module.css';


export const TodoList = ({todos, onTodoStatusChange}) => {

    return (
        <ul className={styles.wrapper}>
            { todos.map(({id, ...otherProps}) => 
                (<TodoItem
                    key={id}
                    id={id}
                    onTodoStatusChange={onTodoStatusChange}
                    {...otherProps}
                />))}
        </ul>
    )
};
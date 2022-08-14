import React from "react";
import { TodoItem } from "../todo-item";
import styles from './index.module.css';


export const TodoList = ({todos}) => {

    return (
        <ul className={styles.wrapper}>
            <TodoItem
                 
                    id={'asdd'}
                    todoText='adsasd'
                    done
                    
                />
            { todos.map(({id, ...otherProps}) => 
                (<TodoItem
                    key={id}
                    id={id}
                    {...otherProps}
                />))}
        </ul>
    )
};
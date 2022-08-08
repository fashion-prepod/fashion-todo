import React from "react";
import { UserInput } from '../../components/user-input';
import { TodoList } from '../../components/todo-list';
import { TodoFilter } from '../../components/todo-filter';
import styles from './index.module.css';

export const TodoPage = () => {
    console.log(styles);

    return (
    <div className={styles.wrapper}>
        <div className={styles.leftSide}>
            <UserInput/>
        </div>
        <div className={styles.rightSide}>
            <TodoFilter/>
            <TodoList/>           
        </div>       
    </div>
    )
};
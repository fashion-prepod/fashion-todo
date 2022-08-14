import React, { useState, useCallback } from "react";
import { UserInput } from '../../components/user-input';
import { TodoList } from '../../components/todo-list';
import { TodoFilter } from '../../components/todo-filter';
import styles from './index.module.css';

export const TodoPage = () => {
    const [todos, setTodos] = useState([]);


    const todoAdd = (todoText) => {
        const todo = {
            todoText,
            done: false,
            id: Math.random().toString()
        };
      
        setTodos((todos) => [...todos, todo]);
    };

    const todoDelete = (todoIdToDelete) => {
        setTodos((prevTodos) => prevTodos.filter(({id}) => id !== todoIdToDelete));
    };

    const todoStatusSwitch = (todoIdToChange) => {
        setTodos((prevTodos) => {
            const changedTodos = prevTodos.map(({id, done, ...todo}) => ({
                ...todo,
                id,
                done: id === todoIdToChange ? !done : done
            }));

            return changedTodos;
        });
    };

    const onTodoStatusSwitch = useCallback(todoStatusSwitch, [setTodos]);
    const onTodoDelete = useCallback(todoDelete, [setTodos]);

    return (
    <div className={styles.wrapper}>
        <div className={styles.leftSide}>
            <UserInput onTodoAdd={todoAdd} />
        </div>
        <div className={styles.rightSide}>
            <TodoFilter/>
            <TodoList 
                todos={todos}
                onTodoStatusChange={onTodoStatusSwitch}
                onTodoDelete={onTodoDelete}
            />           
        </div>       
    </div>
    )
};
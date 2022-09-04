import React, { useState, useCallback, useMemo, useRef } from "react";
import { UserInput } from '../../components/user-input';
import { TodoList } from '../../components/todo-list';
import { TodoFilter } from '../../components/todo-filter';
import { FILTER_CONFIG } from "../../components/todo-filter/constants";
import { getTodosByFilter } from "../../utils/getTodosByFilter";
import {TODOS} from '../../constants';
import { storeTodos } from "../../utils/storeTodos";
import styles from './index.module.css';

export const TodoPage = () => {
    const [todos, setTodos] = useState(() => {
        const storageData = localStorage.getItem(TODOS);
        if (storageData === null) {
            return [];
        } else {
            return  JSON.parse(storageData);
        }
    });

    const [filterStatus, setFilterStatus] = useState(FILTER_CONFIG.ALL);

    const todoInputRef = useRef();
  

    const todoAdd = (todoText) => {
        const todo = {
            todoText,
            done: false,
            id: Math.random().toString()
        };

        setTodos((todos) => {
            const modifiedTodos = [...todos, todo];
            storeTodos(modifiedTodos);
            return modifiedTodos;
        });
    };

    const todoDelete = (todoIdToDelete) => {
        setTodos((prevTodos) => {
            const modifiedTodos = prevTodos.filter(({id}) => id !== todoIdToDelete)
            storeTodos(modifiedTodos);
            return modifiedTodos;
        });
    };

    const todoStatusSwitch = (todoIdToChange) => {
        setTodos((prevTodos) => {
            const modifiedTodos = prevTodos.map(({id, done, ...todo}) => ({
                ...todo,
                id,
                done: id === todoIdToChange ? !done : done
            }));
            storeTodos(modifiedTodos);
            return modifiedTodos;
        });
    };

    const todoTextEdit = (todoIdChange, todoTextChange) => {
        setTodos((prevTodos) => {
            const modifiedTodos = prevTodos.map(({id, todoText, ...todo}) => ({
                ...todo,
                id,
                todoText: id === todoIdChange ? todoTextChange : todoText
            }));
            storeTodos(modifiedTodos);
            return modifiedTodos;
        });
        todoInputRef.current.focus();
    };

    const onTodoStatusSwitch = useCallback(todoStatusSwitch, [setTodos]);
    const onTodoDelete = useCallback(todoDelete, [setTodos]);
    const onTodoTextEdit = useCallback(todoTextEdit, [setTodos])

    const filteredTodos = useMemo(() => {
        return getTodosByFilter(todos, filterStatus);
    }, [filterStatus, todos]);


    return (
    <div className={styles.wrapper}>
        <div className={styles.leftSide}>
            <UserInput onTodoAdd={todoAdd} inputRef={todoInputRef}/>
        </div>
        <div className={styles.rightSide}>
            <TodoFilter 
                filterStatus={filterStatus} 
                onFilterClick={setFilterStatus}
            />
            <TodoList 
                todos={filteredTodos}
                onTodoStatusChange={onTodoStatusSwitch}
                onTodoDelete={onTodoDelete}
                onTodoTextEdit={onTodoTextEdit}
            />
        </div>       
    </div>
    )
};
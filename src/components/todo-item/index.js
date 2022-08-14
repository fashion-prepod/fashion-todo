import React, {memo} from 'react';
import { AiFillFlag } from "react-icons/ai";
import { AiOutlineFlag } from "react-icons/ai";
import {TiDeleteOutline} from 'react-icons/ti';
import styles from './index.module.css';


const TodoItemTemplate = ({
    todoText,
    id,
    done,
    onTodoStatusChange,
    onTodoDelete
}) => {

    console.log(todoText);

    return (
    <li className={`${styles.wrapper} ${done ? styles.done : ''}`}>
        <p>
            {todoText}
        </p>
        <div onClick={() => onTodoStatusChange(id)}>
            {done ? 
                <AiFillFlag 
                    className={`${styles.todoStatus} ${styles.iconDone}`}
                /> :
                <AiOutlineFlag className={styles.todoStatus}/>
            }
        </div>
        <div onClick={() => onTodoDelete(id)}>
            <TiDeleteOutline className={styles.deleteIcon}/> 
        </div>
    </li>
    );
};

export const TodoItem = memo(TodoItemTemplate);

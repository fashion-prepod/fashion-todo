import React from 'react';
import { AiFillFlag } from "react-icons/ai";
import { AiOutlineFlag } from "react-icons/ai";
import {TiDeleteOutline} from 'react-icons/ti';
import styles from './index.module.css';


export const TodoItem = ({todoText, id, done, onTodoStatusChange}) => {

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
        <div>
            <TiDeleteOutline className={styles.deleteIcon}/> 
        </div>
    </li>
    );
};

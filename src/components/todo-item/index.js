import React, {useState, memo} from 'react';
import { AiFillFlag } from "react-icons/ai";
import { AiOutlineFlag, AiOutlineCheckCircle } from "react-icons/ai";
import {TiDeleteOutline, TiPencil} from 'react-icons/ti';
import styles from './index.module.css';


const TodoItemTemplate = ({
    todoText,
    id,
    done,
    onTodoStatusChange,
    onTodoDelete,
    onTodoTextEdit
}) => {

    const [isEdditing, setIsEdditing] = useState(false);
    const [inputText, setInputText] = useState(todoText);

    const onEditClick = () => {
        setIsEdditing((prev) => {
            if (prev) {
                onTodoTextEdit(id, inputText);
            }

            return !prev;
        });
    };

    return (
    <li className={`${styles.wrapper} ${done ? styles.done : ''}`}>
        <p>
            {
                isEdditing ? 
                <input 
                    onChange={({target: {value}}) => setInputText(value) }
                    className={styles.input}
                    value={inputText}
                    type="text"
                    autoFocus
                /> :
                todoText
            }
        </p>
        <div onClick={onEditClick}>
            {isEdditing ? <AiOutlineCheckCircle 
                className={`${styles.todoStatus} ${styles.checkIcon}`}
            /> : 
            <TiPencil 
                className={`${styles.todoStatus} ${styles.pencilIcon}`}
            />}
        </div>
        <div onClick={() => onTodoStatusChange(id)}>
            {done ? 
                <AiFillFlag 
                    className={`${styles.todoStatus} ${styles.iconDone}`}
                /> :
                <AiOutlineFlag className={styles.todoStatus}/>
            }
        </div>
        <div onClick={() => onTodoDelete(id)}>
            <TiDeleteOutline className={`${styles.todoStatus} ${styles.deleteIcon}`}/> 
        </div>
    </li>
    );
};

export const TodoItem = memo(TodoItemTemplate);

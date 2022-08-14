import React from 'react';
import { AiFillFlag } from "react-icons/ai";
import { AiOutlineFlag } from "react-icons/ai";
import {TiDeleteOutline} from 'react-icons/ti';
import styles from './index.module.css';


export const TodoItem = ({todoText, id, done}) => {

    return (
    <li className={styles.wrapper}>
        <p>
            {todoText}
        </p>
        <div>
            {done ? 
                <AiFillFlag className={styles.todoStatus}/> :
                <AiOutlineFlag className={styles.todoStatus}/>
            }
        </div>
        <div>
            <TiDeleteOutline className={styles.deleteIcon}/> 
        </div>
    </li>
    );
};

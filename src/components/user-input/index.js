import React, {useState} from "react";
import styles from './index.module.css';

export const UserInput = ({ onTodoAdd }) => {
    const [todoText, setTodoText] = useState('');

    const onChangeHandler = ({target: {value}}) => {
        setTodoText(value);
    };
    
    const onClickHandler = () => onTodoAdd(todoText);
    // TODO do not add empty todo
    return (
        <div className={styles.wrapper}>
            <input 
                value={todoText}
                onChange={onChangeHandler}
                className={styles.input}
                type='text'
                autoFocus
            />
            <button 
                className={styles.button} 
                onClick={onClickHandler} 
            > Add </button>
        </div>
    );
};
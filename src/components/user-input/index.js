import React, {useState} from "react";
import styles from './index.module.css';
import { Validation } from "../../compound/validation";
import {validate, VALIDATION_TYPE} from '../../utils/validate';

export const UserInput = ({ onTodoAdd }) => {
    const [todoText, setTodoText] = useState('');
    const [error, setError] = useState('');

    const onChangeHandler = ({target: {value}}) => {
        setTodoText(value);
        if (error) {
            setError('');
        }
    };
    
    const onClickHandler = () =>{
        const validateTodoTextConfig = [
            VALIDATION_TYPE.IS_EMPTY,
            VALIDATION_TYPE.ONLY_NUMBERS,
            VALIDATION_TYPE.MIN_LENGTH
        ];

        const validateMessage = validate(todoText, validateTodoTextConfig);

        if (validateMessage) {
            setError(validateMessage);
        } else {
            onTodoAdd(todoText);
            setTodoText('');
        }
    };

    return (
        <div className={styles.wrapper}>
            <Validation error={error}>
                <input 
                    value={todoText}
                    onChange={onChangeHandler}
                    className={styles.input}
                    type='text'
                    autoFocus
                />
            </Validation>
            <button 
                className={styles.button} 
                onClick={onClickHandler} 
            > Add </button>
        </div>
    );
};
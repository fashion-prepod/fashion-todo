import { useState } from "react";
import { Validation } from "../../compound/validation";
import styles from './index.module.css';

export const LoginPage = () => {
    // 0. После нажатия на button идем в /todos
    
    // 1. Валидация логина 
    // (не должен состоять только из цифр, 
    // не должно быть пробелов)

    // 2. Валидация пароля 
    // (должна быть одна большая буква,
    //  один спец символ, не должно быть пробелов)
 

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>Please log in</h1>
                <div>
                    <input className={styles.input} type='text'/>
                </div>
                <div>
                    <input className={styles.input} type='password'/>
                </div>
                <button className={styles.btn}>Log in</button>
            </div>
        </div>
    )
};
import React from "react";
import styles from './index.module.css';

export const UserInput = () => {
    return (
        <div className={styles.wrapper}>
            <input className={styles.input}  type='text' />
            <button className={styles.button}> Add </button>
        </div>
    );
};
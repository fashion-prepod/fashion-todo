import React from "react";
import styles from './index.module.css';


export const Validation = ({children, error}) => {
    return (
        <span className={styles.wrapper}>
            {children}
            {Boolean(error) && <span className={styles.error}>{error}</span>}
        </span>
    );
};
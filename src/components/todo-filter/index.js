import React from 'react';
import styles from './index.module.css';

export const TodoFilter = () => {
    return (
        <div className={styles.wrapper}>
            <button>All</button>
            <button className={styles.active}>Done</button>
            <button>Undone</button>
        </div>
    );
};

import React from 'react';
import { FilterButton } from '../filter-button';
import { FILTER_CONFIG } from './constants';
import styles from './index.module.css';


export const TodoFilter = ({filterStatus, onFilterClick}) => {
    return (
        <div className={styles.wrapper}>
            <FilterButton 
                clickHandler={onFilterClick}
                isActive={filterStatus === FILTER_CONFIG.ALL}
                filterLabel={FILTER_CONFIG.ALL}>
                    All
            </FilterButton>
            <FilterButton
                clickHandler={onFilterClick}
                isActive={filterStatus === FILTER_CONFIG.DONE}
                filterLabel={FILTER_CONFIG.DONE}>
                    Done
            </FilterButton>
            <FilterButton
                clickHandler={onFilterClick}
                isActive={filterStatus === FILTER_CONFIG.UNDONE}
                filterLabel={FILTER_CONFIG.UNDONE}>
                    Undone
            </FilterButton>
        </div>
    );
};

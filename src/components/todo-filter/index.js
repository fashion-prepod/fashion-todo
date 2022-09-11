import React from 'react';
import { FilterButton } from '../filter-button';
import { FILTER_CONFIG } from '../../constants';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import actions from '../../redux/actions/creators';
import styles from './index.module.css';


export const TodoFilter = () => {
    const currentFilter = useSelector(getFilter);
    const {todoFilterChange} = actions;

    return (
        <div className={styles.wrapper}>
            <FilterButton 
                clickHandler={todoFilterChange}
                isActive={currentFilter === FILTER_CONFIG.ALL}
                filterLabel={FILTER_CONFIG.ALL}>
                    All
            </FilterButton>
            <FilterButton
                clickHandler={todoFilterChange}
                isActive={currentFilter === FILTER_CONFIG.DONE}
                filterLabel={FILTER_CONFIG.DONE}>
                    Done
            </FilterButton>
            <FilterButton
                clickHandler={todoFilterChange}
                isActive={currentFilter === FILTER_CONFIG.UNDONE}
                filterLabel={FILTER_CONFIG.UNDONE}>
                    Undone
            </FilterButton>
        </div>
    );
};

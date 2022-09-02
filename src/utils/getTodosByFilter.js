import { FILTER_CONFIG } from "../components/todo-filter/constants";

export const getTodosByFilter = (todos, filterStatus) => {
    return filterStatus === FILTER_CONFIG.ALL ? 
        todos :
        todos.filter(({done}) => 
                (done && filterStatus === FILTER_CONFIG.DONE) ||
                (!done && filterStatus === FILTER_CONFIG.UNDONE)  
        ); 
};
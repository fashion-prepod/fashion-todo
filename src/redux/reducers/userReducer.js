
import {USER} from '../actions/types';

const initialState = {
    user: null,
    error: null,
    isLoading: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER.USER_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            };
        case USER.USER_ERROR:
            return {
                ...state,
                error: action.payload.error,
            };
        case USER.USER_SIGNOUT: 
            return {
                ...state,
                user: null,
                error: null
            };
        case USER.USER_LOGIN:
            return {
                ...state,
                user: action.payload.user    
            }
        default:
            return state;
    }
};
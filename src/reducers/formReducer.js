import {
    LOG_MAIL,
    LOG_PASSWORD
} from '../actions/types';

const initialState = {
    email: '',
    password: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_MAIL:
           return {
               ...state,
               email: action.payload
           };
        case LOG_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state;
    }
}
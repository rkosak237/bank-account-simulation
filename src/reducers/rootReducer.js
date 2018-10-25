import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';

const rootReducer = combineReducers({
    history: fetchReducer,
    products: fetchReducer,
    summary: fetchReducer
});


export default rootReducer;
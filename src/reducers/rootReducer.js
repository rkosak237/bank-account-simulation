import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    fetchItems: fetchReducer,
    filters: filterReducer
});


export default rootReducer;
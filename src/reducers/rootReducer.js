import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import filterReducer from './filterReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
    fetchItems: fetchReducer,
    filters: filterReducer,
    form: formReducer
});


export default rootReducer;
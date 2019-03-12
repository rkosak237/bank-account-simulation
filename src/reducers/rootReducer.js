import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import filterReducer from './filterReducer';
import mobileReducer from './mobileReducer';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    fetchItems: fetchReducer,
    filters: filterReducer,
    firebase: firebaseReducer,
    mobile: mobileReducer
});


export default rootReducer;
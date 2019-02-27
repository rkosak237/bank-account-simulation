import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_HISTORY_SUCCESS,
    FETCH_SUMMARY_SUCCESS,
    FETCH_REQUEST
} from '../actions/types';

const initialState = {
    itemsHistory: [],
    itemsProducts: [],
    itemsSummary: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_HISTORY_SUCCESS:
            return {
                ...state,
                itemsHistory: action.payload,
                isFetching: false,
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                itemsProducts: action.payload,
                isFetching: false,
            }
        case FETCH_SUMMARY_SUCCESS:
            return {
                ...state,
                itemsSummary: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}
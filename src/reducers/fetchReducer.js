import { FETCH_PRODUCTS, FETCH_HISTORY, FETCH_SUMMARY } from '../actions/types';

const initialState = {
    itemsHistory: [],
    itemsProducts: [],
    itemsSummary: {},
    isFetching: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HISTORY:
            return {
                ...state,
                itemsHistory: action.payload
            }
        case FETCH_PRODUCTS:
            return {
                ...state,
                itemsProducts: action.payload
            }
        case FETCH_SUMMARY:
            return {
                ...state,
                itemsSummary: action.payload
            }
        default:
            return state;
    }
}
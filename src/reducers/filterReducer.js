import { FILTER_DESCRIPTION, FILTER_CATEGORY, FILTER_AMOUNT, FILTER_STATUS } from '../actions/types';
const filtersReducerDefaultState = {
    id: '',
    date: '',
    description: '',
    category: '',
    amount: '',
    status: '',
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
         case FILTER_DESCRIPTION:
            return {
                ...state,
                description: action.description
            }
        case FILTER_CATEGORY:
            return {
                ...state,
                category: action.category
            }
        case FILTER_AMOUNT:
            return {
                ...state,
                amount: action.amount
            }
        case FILTER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

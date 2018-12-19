import filterReducer from '../../reducers/filterReducer';
import {
    FILTER_DESCRIPTION,
    FILTER_CATEGORY,
    FILTER_AMOUNT,
    FILTER_STATUS
} from '../../actions/types';

describe('Request reducer', () => {
    const initialState = {
        id: '',
        date: '',
        description: '',
        category: '',
        amount: '',
        status: '',
    }

    it('has a initial state', () => {
        const state = filterReducer(undefined, {type: 'test'})

        expect(state).toEqual(initialState)
    })

    it('should filters category', () => {
        const category = 'Food is the category';
        const action = {
            type: FILTER_CATEGORY,
            category
        }
        const state = filterReducer(undefined, action)

        expect(state.category).toBe(category);
    })


})
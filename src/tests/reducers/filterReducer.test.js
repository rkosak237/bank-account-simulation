import filterReducer from '../../reducers/filterReducer';
import {
    FILTER_DESCRIPTION,
    FILTER_CATEGORY,
    FILTER_AMOUNT,
    FILTER_STATUS
} from '../../actions/types';

describe('Filter reducer', () => {
    const initialState = {
        id: '',
        date: undefined,
        description: '',
        category: '',
        amount: undefined,
        status: '',
    }

    it('has a initial state', () => {
        const state = filterReducer(undefined, {type: 'test'})

        expect(state).toEqual(initialState)
    })

    //filter description
    it('should filters description', () => {
        const description = 'Test is the description';
        const action = {
            type: FILTER_DESCRIPTION,
            description
        }
        const state = filterReducer(undefined, action)

        expect(state.description).toBe(description);
    })


    //filter category
    it('should filters category', () => {
        const category = 'Food is the category';
        const action = {
            type: FILTER_CATEGORY,
            category
        }
        const state = filterReducer(undefined, action)

        expect(state.category).toBe(category);
    })

    //filter amount
    it('should filters amount', () => {
        const amount = 2500;
        const action = {
            type: FILTER_AMOUNT,
            amount
        }
        const state = filterReducer(undefined, action)

        expect(state.amount).toBe(amount);
    })

    //filter status
    it('should filters status', () => {
        const status = 'income';
        const action = {
            type: FILTER_STATUS,
            status
        }
        const state = filterReducer(undefined, action)

        expect(state.status).toBe(status);
    })



})
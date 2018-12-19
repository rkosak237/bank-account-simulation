import { filterDescription, filterCategory, filterAmount, filterStatus } from '../../actions/filters';
import {
    FILTER_DESCRIPTION,
    FILTER_CATEGORY,
    FILTER_AMOUNT,
    FILTER_STATUS
} from '../../actions/types';

describe('actions used for filtering data', () => {

    it('Should filter description', () => {
        const action = filterDescription('test');

        expect(action).toEqual({
            type: FILTER_DESCRIPTION,
            description: 'test'
        })
    })

    it('Should filter category', () => {
        const action = filterCategory('food');

        expect(action).toEqual({
            type: FILTER_CATEGORY,
            category: 'food'
        })
    })


    it('Should filter amount', () => {
        const action = filterAmount(2350);

        expect(action).toEqual({
            type: FILTER_AMOUNT,
            amount: 2350
        })
    })



    it('Should filter status', () => {
        const action = filterStatus('income');

        expect(action).toEqual({
            type: FILTER_STATUS,
            status: 'income'
        })
    })


})
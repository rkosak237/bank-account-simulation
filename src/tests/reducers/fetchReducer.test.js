import fetchReducer from '../../reducers/fetchReducer';
import { fetchHistory } from '../../actions/fetchActions';

describe('Request reducer', () => {
    const initialState = {
        itemsHistory: [],
        itemsProducts: [],
        itemsSummary: {}
    }

    it('has a initial state', () => {
        expect(fetchReducer(undefined, {type: 'test'})).toEqual(
        {
            itemsHistory: [],
            itemsProducts: [],
            itemsSummary: {}
        })
    }),

    it('is fetching data from history', () => {
        const example = [];
       async function historyData() {

       };


        expect(fetchReducer(fetchHistory, {
                type: 'FETCH_HISTORY',
                payload: history.content
            })).toEqual(
        example)
    })

})
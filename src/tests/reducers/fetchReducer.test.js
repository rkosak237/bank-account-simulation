import fetchReducer from '../../reducers/fetchReducer';
import {
    FETCH_PRODUCTS,
    FETCH_HISTORY,
    FETCH_SUMMARY
} from '../../actions/types';

describe('Request reducer', () => {
    const initialState = {
        itemsHistory: [],
        itemsProducts: [],
        itemsSummary: {}
    }

    it('has a initial state', () => {
        expect(fetchReducer(undefined, {type: 'test'})).toEqual(initialState)
    })

    it('passes history correctly', () => {

        const action = {
            type: FETCH_HISTORY,
            payload: [
                    {
                    id: "B48YL",
                    date: "2017-01-01",
                    description: "etiam aliquam aliquam",
                    category: "Cash",
                    currency: "PLN",
                    amount: 238,
                    status: "income"
                }, {
                    id: "t1VYo",
                    date: "2017-01-02",
                    description: "nunc sollicitudin pretium",
                    category: "Gas",
                    currency: "EUR",
                    amount: 658,
                    status: "income"
                }
            ]
        }
        expect(fetchReducer(undefined, action)).toEqual(
            {
                itemsHistory: [
                    {
                        id: "B48YL",
                        date: "2017-01-01",
                        description: "etiam aliquam aliquam",
                        category: "Cash",
                        currency: "PLN",
                        amount: 238,
                        status: "income"
                    },
                    {
                        id: "t1VYo",
                        date: "2017-01-02",
                        description: "nunc sollicitudin pretium",
                        category: "Gas",
                        currency: "EUR",
                        amount: 658,
                        status: "income"
                    }
                ],
                itemsProducts: [],
                itemsSummary: {}
            }
        )
    })

     it('passes products correctly', () => {

         const action = {
             type: FETCH_PRODUCTS,
             payload: [
                {
                    type: "Wallet",
                    currency: "PLN",
                    amount: 489.5,
                    elements: 0
                },
                {
                    type: "Deposits",
                    currency: "EUR",
                    amount: 12411.2,
                    elements: 2
                },
            ]
         }
         expect(fetchReducer(undefined, action)).toEqual({
             itemsHistory: [],
             itemsProducts: [
                 {
                     type: "Wallet",
                     currency: "PLN",
                     amount: 489.5,
                     elements: 0
                 },
                 {
                     type: "Deposits",
                     currency: "EUR",
                     amount: 12411.2,
                     elements: 2
                 },
             ],
             itemsSummary: {}
         })
     })


     it('passes summary correctly', () => {

         const action = {
             type: FETCH_SUMMARY,
             payload:
                {
                    balance: 84439,
                    funds: 37477,
                    payments: 92201
                }

         }
         expect(fetchReducer(undefined, action)).toEqual({
             itemsHistory: [],
             itemsProducts: [],
             itemsSummary: {
                 balance: 84439,
                 funds: 37477,
                 payments: 92201
             }
         })
     })

})
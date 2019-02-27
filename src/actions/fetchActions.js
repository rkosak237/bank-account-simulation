import { FETCH_HISTORY_SUCCESS, FETCH_PRODUCTS_SUCCESS, FETCH_SUMMARY_SUCCESS } from './types';

export const fetchRequest = () => dispatch => {
    dispatch({
        type: 'FETCH_REQUEST',
    })
}

export const fetchHistory = () => dispatch => {
    fetch('https://efigence-camp.herokuapp.com/api/data/history')
        .then(rawData => rawData.json())
        .then(history =>
            dispatch({
                type: FETCH_HISTORY_SUCCESS,
                payload: history.content
            })
    );
}


export const fetchProducts = () => dispatch => {
    fetch('https://efigence-camp.herokuapp.com/api/data/products')
        .then(rawData => rawData.json())
        .then(products =>
            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: products.content

            })
    );
}

export const fetchSummary = () => dispatch => {
    fetch('https://efigence-camp.herokuapp.com/api/data/summary')
        .then(rawData => rawData.json())
        .then(summary =>
            dispatch({
                type: FETCH_SUMMARY_SUCCESS,
                payload: summary.content[0]
            })

    );
}
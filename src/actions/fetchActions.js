import { FETCH_HISTORY, FETCH_PRODUCTS, FETCH_SUMMARY } from './types';

export const fetchHistory = () => dispatch => {
    fetch('https://efigence-camp.herokuapp.com/api/data/history')
        .then(rawData => rawData.json())
        .then(history =>
            dispatch({
                type: FETCH_HISTORY,
                payload: history.content
            })
    );
}

export const fetchProducts = () => dispatch => {
    fetch('https://efigence-camp.herokuapp.com/api/data/products')
        .then(rawData => rawData.json())
        .then(products =>
            dispatch({
                type: FETCH_PRODUCTS,
                payload: products.content
            })
    );
}

export const fetchSummary = () => dispatch => {
    fetch('https://efigence-camp.herokuapp.com/api/data/summary')
        .then(rawData => rawData.json())
        .then(summary =>
            dispatch({
                type: FETCH_SUMMARY,
                payload: summary.content[0]
            })

    );
}
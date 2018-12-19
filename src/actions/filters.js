import {
    FILTER_DESCRIPTION,
    FILTER_CATEGORY,
    FILTER_AMOUNT,
    FILTER_STATUS
} from './types';

export const filterDescription = (description) => ({
    type: FILTER_DESCRIPTION,
    description
})

export const filterCategory = (category) => ({
    type: FILTER_CATEGORY,
    category
})

export const filterAmount = (amount) => ({
    type: FILTER_AMOUNT,
    amount
})

export const filterStatus = (status) => ({
    type: FILTER_STATUS,
    status
})
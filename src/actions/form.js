import {
    LOG_MAIL,
    LOG_PASSWORD
} from './types';

export const logMail = (mail) => ({
    type: LOG_MAIL,
    mail
})

export const logPassword = (password) => ({
    type: LOG_PASSWORD,
    password
})
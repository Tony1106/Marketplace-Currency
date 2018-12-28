import {createAsyncAction} from 'typesafe-actions'

export const loginWithEmailAndPassword = createAsyncAction(
    'LOGIN_WITH_EMAIL_AND_PASSWORD_REQUEST',
    'LOGIN_WITH_EMAIL_AND_PASSWORD_SUCCESS',
    'LOGIN_WITH_EMAIL_AND_PASSWORD_FAILURE'
)();
export const signUpWithEmailAndPassword = createAsyncAction(
    'SIGNUP_WITH_EMAIL_AND_PASSWORD_REQUEST',
    'SIGNUP_WITH_EMAIL_AND_PASSWORD_SUCCESS',
    'SIGNUP_WITH_EMAIL_AND_PASSWORD_FAILURE'
)();

export const logOut = createAsyncAction(
    'LOG_OUT_REQUEST',
    'LOG_OUT_SUCCESS',
    'LOG_OUT_FAILURE'
)();
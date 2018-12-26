import {createAsyncAction} from 'typesafe-actions'

export const getItemDataFromFirebase = createAsyncAction(
    'GET_ITEM_DATA_FROM_FIREBASE_REQUEST',
    'GET_ITEM_DATA_FROM_FIREBASE_SUCCESS',
    'GET_ITEM_DATA_FROM_FIREBASE_FAILURE'
)();

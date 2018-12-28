import {createAsyncAction} from 'typesafe-actions'

export const getItemDataFromFirebase = createAsyncAction(
    'GET_ITEM_DATA_FROM_FIREBASE_REQUEST',
    'GET_ITEM_DATA_FROM_FIREBASE_SUCCESS',
    'GET_ITEM_DATA_FROM_FIREBASE_FAILURE'
)();
export const postOfferToDatabase = createAsyncAction(
    'POST_OFFER_TO_FIREBASE_REQUEST',
    'POST_OFFER_TO_FIREBASE_SUCCESS',
    'POST_OFFER_TO_FIREBASE_FAILURE'
)();
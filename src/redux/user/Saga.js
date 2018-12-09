import {take, put, takeEvery} from 'redux-saga/effects'

export function* loginWithEmailAndPassword(){
    console.log('login');
    yield put({type: "USER_LOGIN"})
}
export default function* userSaga(){
    console.log('hello Saga');
    yield takeEvery("USER_LOGIN", loginWithEmailAndPassword) 
}
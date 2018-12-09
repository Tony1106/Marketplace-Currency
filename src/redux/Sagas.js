import { all, fork } from 'redux-saga/effects';
import userSaga from './user/Saga'
export default function* rootSaga (){
    yield all([
        fork(userSaga)

    ])
}
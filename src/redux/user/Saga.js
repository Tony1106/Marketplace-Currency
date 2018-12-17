import {  put, call, takeEvery, all } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as A from "./Action";

import {rsf} from '../../config/firebase/config'


export function* loginWithEmailAndPassword(action) {
  console.log("action success", action);
  try {
    const user = yield call(rsf.auth.signInWithEmailAndPassword, action.payload.email, action.payload.password);
    console.log(user);
    

    yield put( A.loginWithEmailAndPassword.success(user));

  } catch (err) {
    yield put(A.loginWithEmailAndPassword.failure());
    console.log(err);
    
  }
}
export function* signUpWithEmailAndPassword(action) {
  console.log("action success", A.signUpWithEmailAndPassword.success);
console.log(action, 'action sign up');

  try {
    const user = yield call(rsf.auth.createUserWithEmailAndPassword, action.payload.email, action.payload.password);
    // yield call(firebaseSignUpWithEmailAndPassword, action.payload);
    console.log(user, 'user');
    
    yield put(A.signUpWithEmailAndPassword.success(user));
  } catch (err) {
    yield put(A.signUpWithEmailAndPassword.failure(err));
  }
}

export default function* userSaga() {
  console.log("hello Saga");
yield all([
  yield takeEvery(
    getType(A.loginWithEmailAndPassword.request),
    loginWithEmailAndPassword
  ),
  yield takeEvery(
    getType(A.signUpWithEmailAndPassword.request),
    signUpWithEmailAndPassword
  )
])
}

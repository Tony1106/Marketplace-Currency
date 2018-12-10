import {  put, call, takeEvery, all } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as A from "./Action";

import {reduxSagaFirebase} from '../../config/firebase/config'

// const authProvider = new firebase.auth.GoogleAuthProvider();
// const rsf = ReduxSagaFirebase;
const firebaseAuthentication = data => {
  console.log(data, "data in firebase");
  return data;
};
export function* loginWithEmailAndPassword(action) {
  console.log("action success", action);
  try {
    const user = yield call(reduxSagaFirebase.auth.createUserWithEmailAndPassword, action.payload.email, action.payload.password);
    console.log(user);
    
    yield call(firebaseAuthentication, action.payload);
    yield put( A.loginWithEmailAndPassword.success());

  } catch (err) {
    yield put(A.loginWithEmailAndPassword.failure());
    console.log(err);
    
  }
}
export function* signUpWithEmailAndPassword(action) {
  console.log("action success", A.signUpWithEmailAndPassword.success);
console.log(action, 'action sign up');

  try {
    const user = yield call(reduxSagaFirebase.auth.createUserWithEmailAndPassword, action.payload.email, action.payload.password);
    // yield call(firebaseSignUpWithEmailAndPassword, action.payload);
    console.log(user, 'user');
    
    yield put(A.signUpWithEmailAndPassword.success());
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

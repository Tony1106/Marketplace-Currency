import { take, put, call, takeEvery, all } from "redux-saga/effects";
import { getType, action } from "typesafe-actions";
import * as A from "./Action";
const firebaseAuthentication = data => {
  console.log(data, "data in firebase");
  return data;
};
const firebaseSignUpWithEmailAndPassword = data => {
  console.log(data, "data in firebase");
  return data;
};
export function* loginWithEmailAndPassword(action) {
  console.log("action success", action);
  try {
    yield call(firebaseAuthentication, action.payload);
    yield put( A.loginWithEmailAndPassword.success());

  } catch (err) {
    yield put(A.loginWithEmailAndPassword.failure());
    console.log(err);
    
  }
}
export function* signUpWithEmailAndPassword(action) {
  console.log("action success", A.signUpWithEmailAndPassword.success);
  try {
    yield call(firebaseSignUpWithEmailAndPassword, action.payload);
    yield put({ type: getType(A.signUpWithEmailAndPassword.success) });
  } catch (err) {
    yield put({ type: getType(A.signUpWithEmailAndPassword.failure) });
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

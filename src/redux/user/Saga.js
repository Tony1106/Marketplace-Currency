import { put, call, takeEvery, all } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as A from "./Action";

import { rsf } from "../../config/firebase/config";

export function* loginWithEmailAndPassword(action) {
  try {
    const user = yield call(
      rsf.auth.signInWithEmailAndPassword,
      action.payload.email,
      action.payload.password
    );

    yield put(A.loginWithEmailAndPassword.success(user));
  } catch (err) {
    yield put(A.loginWithEmailAndPassword.failure());
    console.log(err);
  }
}
export function* signUpWithEmailAndPassword(action) {
  try {
    const user = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      action.payload.email,
      action.payload.password
    );

    yield put(A.signUpWithEmailAndPassword.success(user));
  } catch (err) {
    yield put(A.signUpWithEmailAndPassword.failure(err));
  }
}
export function* logOut() {
  try {
    const data = yield call(rsf.auth.signOut);
    yield put(A.logOut.success(data));
  } catch (err) {
    console.log(err);
  }
}

export default function* userSaga() {
  yield all([
    yield takeEvery(
      getType(A.loginWithEmailAndPassword.request),
      loginWithEmailAndPassword
    ),
    yield takeEvery(
      getType(A.signUpWithEmailAndPassword.request),
      signUpWithEmailAndPassword
    ),
    yield takeEvery(getType(A.logOut.request), logOut)
  ]);
}

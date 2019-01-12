import { put, call, takeEvery, all } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as A from "./Action";

import { rsf } from "../../config/firebase/config";

export function* uploadDataSellMoney(action) {
  try {
    yield call(rsf.firestore.addDocument, "ItemData", action.payload);
    yield put(A.createAdvertisingSellMoney.success());
  } catch (err) {
    yield put(A.createAdvertisingSellMoney.failure(err));
  }
}
export function* uploadDataBuyMoney(action) {
  try {
    yield call(rsf.firestore.addDocument, "ItemData", action.payload);
    yield put(A.createAdvertisingBuyMoney.success());
  } catch (err) {
    yield put(A.createAdvertisingBuyMoney.failure(err));
  }
}

export default function* marketPlace() {
  yield all([
    yield takeEvery(
      getType(A.createAdvertisingBuyMoney.request),
      uploadDataBuyMoney
    ),
    yield takeEvery(
      getType(A.createAdvertisingSellMoney.request),
      uploadDataSellMoney
    )
  ]);
}

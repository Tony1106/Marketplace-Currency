import {  put, call, takeEvery, all } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as A from "./Action";

import {rsf} from '../../config/firebase/config'



export function* getItemDataFromFirebase(action) {

console.log('get data from firebase');

  try {
    const snapShot = yield call(rsf.firestore.getCollection, 'ItemData');
  
    let itemData; 
    snapShot.forEach(item => {
      itemData= {
        ...itemData,
        [item.id]: item.data()

      }
    })
    console.log(itemData, 'snapshot');
    yield put(A.getItemDataFromFirebase.success(itemData))
  } catch (err) {
    yield put(A.getItemDataFromFirebase.failure(err));
  }
}


export default function* marketPlace() {
  console.log("hello Saga");
yield all([
  yield takeEvery(
    getType(A.getItemDataFromFirebase.request),
    getItemDataFromFirebase
  ),
])
}

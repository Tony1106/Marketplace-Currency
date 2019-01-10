import { all, fork } from "redux-saga/effects";
import userSaga from "./user/Saga";
import marketPlace from "./money/Saga";
import ItemData from "./ItemData/Saga";
export default function* rootSaga() {
	yield all([
		fork(userSaga), 
		fork(marketPlace),
		fork(ItemData)
  
	]);
}

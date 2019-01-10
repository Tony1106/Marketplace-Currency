import { put, call, takeEvery, all } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as A from "./Action";
import firebase from "firebase";
import { rsf } from "../../config/firebase/config";

export function* getItemDataFromFirebase(action) {
	try {
		const snapShot = yield call(rsf.firestore.getCollection, "ItemData");

		let itemData;
		snapShot.forEach(item => {
			itemData = {
				...itemData,
				[item.id]: item.data()
			};
		});
		yield put(A.getItemDataFromFirebase.success(itemData));
	} catch (err) {
		yield put(A.getItemDataFromFirebase.failure(err));
	}
}
function uploadOfferToDatabase(data) {
	const { itemID, messageToSellerOrBuyer, offerRate } = data;

	firebase
		.firestore()
		.collection("ItemData")
		.doc(itemID)
		.collection("Offer")
		.add({
			messageToSellerOrBuyer,
			offerRate
		});
}
export function* getItemDataFromFirebaseWithFilter(action) {
	const { type, currency, location } = action.payload;
	try {
		// const colRef = rsf.firestore.getCollection('ItemData')
		let ref = firebase.firestore().collection("ItemData");
		if (type) {
			ref = ref.where("type", "==", type);
		}
		if (currency) {
			ref = ref.where("currencyBuy", "==", currency);
		}
		if (location) {
			ref = ref.where("location", "==", location);
		}

		const snapShot = yield call(rsf.firestore.getCollection, ref);

		let itemData;
		snapShot.forEach(item => {
			itemData = {
				...itemData,
				[item.id]: item.data()
			};
		});

		yield put(A.getItemDataFromFirebase.success(itemData));
	} catch (err) {
		console.log(err);

		yield put(A.getItemDataFromFirebase.failure(err));
	}
}
export function* postOfferToDatabase(action) {
	try {
		const res = yield call(uploadOfferToDatabase, action.payload);
		yield put(A.postOfferToDatabase.success(res));
	} catch (err) {
		yield put(A.postOfferToDatabase.failure(err));
	}
}

export default function* marketPlace() {
	yield all([
		yield takeEvery(
			getType(A.getItemDataFromFirebase.request),
			getItemDataFromFirebase
		),
		yield takeEvery(
			getType(A.getItemDataFromFirebaseWithFilter.request),
			getItemDataFromFirebaseWithFilter
		),
		yield takeEvery(getType(A.postOfferToDatabase.request), postOfferToDatabase)
	]);
}

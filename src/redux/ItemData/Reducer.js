import { getType } from "typesafe-actions";
import * as A from "./Action";

const initState = {
  isLoading: false
};

const ItemData = (state = initState, action) => {
  switch (action.type) {
    case getType(A.getItemDataFromFirebase.success):
      const itemData = action.payload;
      return {
        ...state,
        itemData
      };
    case getType(A.postOfferToDatabase.success):
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default ItemData;

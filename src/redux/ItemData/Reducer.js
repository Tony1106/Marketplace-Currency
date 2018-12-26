import { getType } from "typesafe-actions";
import * as A from "./Action";
const initState = {
  // isLoading: false,
  // amountMoney: 0,
  // autoAcceptOffer: 0,
  // currencyPaidBy: '',
  // currencyWantToBuy: "",
  // description: "",
  // liveRate: 0,
  // location: "",
  // minOffer: 0,
  // title: "",
  // type: "Buy"
};

const ItemData = (state = initState, action) => {
    
  switch (action.type) {
    case getType(A.getItemDataFromFirebase.success):
    console.log('succes get data from database', action);
    const itemData = action.payload;
      return {
        ...state,
        itemData
      };
  
    default:
      return state;
  }
};

export default ItemData;

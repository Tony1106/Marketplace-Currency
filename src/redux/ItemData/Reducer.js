import { getType } from "typesafe-actions";
import * as A from "./Action";
const initState = {
  isLoading: false,
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

    const itemData = action.payload;
      return {
        ...state,
        itemData
      };
      // case getType(A.postOfferToDatabase.request):
      // console.log('request data');
      
      // return {
     
      //   ...state,
      //   isLoading: true
      // }
    case getType(A.postOfferToDatabase.success):
    console.log(action.payload, 'action of post');
    
      return {
        ...state,
        isLoading: action.payload,

      }
    default:
      return state;
  }
};

export default ItemData;

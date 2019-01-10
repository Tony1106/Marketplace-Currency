import { getType } from "typesafe-actions";
import * as A from "./Action";
const initState = {
	isLoading: false,
	userWantToSell: {
		totalMoneyWantToSell: "",
		currencySell: "",
		currencyBuy: "",
		ad: {
			title: "",
			description: "",
			location: "",
			minOffer: 0,
			autoAcceptOffer: 0
		}
	}
};

const marketPlace = (state = initState, action) => {
    
	switch (action.type) {
	case getType(A.createAdvertisingSellMoney.success):
		console.log("succes add to the database");
    
		return {
			...state,
      
		};
  
	default:
		return state;
	}
};

export default marketPlace;

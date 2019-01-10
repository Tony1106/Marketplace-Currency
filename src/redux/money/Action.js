import {createAsyncAction} from "typesafe-actions";

export const createAdvertisingSellMoney = createAsyncAction(
	"CREATE_ADVERT_FOR_SELL_MONEY_REQUEST",
	"CREATE_ADVERT_FOR_SELL_MONEY_SUCCESS",
	"CREATE_ADVERT_FOR_SELL_MONEY_FAILURE"
)();
export const createAdvertisingBuyMoney = createAsyncAction(
	"CREATE_ADVERT_FOR_BUY_MONEY_REQUEST",
	"CREATE_ADVERT_FOR_BUY_MONEY_SUCCESS",
	"CREATE_ADVERT_FOR_BUY_MONEY_FAILURE"
)();
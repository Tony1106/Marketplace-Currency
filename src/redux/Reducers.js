import { combineReducers } from "redux";
import user from "./user/Reducer";
import marketPlace from "./money/Reducer";
import ItemData from "./ItemData/Reducer";

const rootReducer = combineReducers({
  user,
  marketPlace,
  ItemData
});

export default rootReducer;

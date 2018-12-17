import {combineReducers} from 'redux'
import user from './user/Reducer'
import marketPlace from './money/Reducer'
const rootReducer = combineReducers({
 user,
 marketPlace
})

export default rootReducer
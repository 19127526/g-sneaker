import {combineReducers} from "redux"
import {CartPageReducer} from "@/pages/index.reducer"


const rootReducer = combineReducers({
  CartPage : CartPageReducer,
})

export default rootReducer
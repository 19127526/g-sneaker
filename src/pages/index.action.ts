import * as types from './index.constant'
import {actionWithPayload} from "@/models/redux_action";


export const updateItemCart = (payload : any) : actionWithPayload =>({
  type: types.UPDATE_ITEM_INTO_CART,
  payload
})


export const removeItemCart= (payload : any) : actionWithPayload  =>({
  type: types.REMOVE_ITEM_INTO_CART,
  payload
})


import * as types from "./index.constant"
import produce from "immer"

interface initialStateInterface {
  cartItem :  any[]
}

const initialState : initialStateInterface = {
  cartItem: [],
}


export const CartPageReducer = (state = initialState, action : any) =>
 produce(state, draft => {
   switch (action.type) {
     case types.UPDATE_ITEM_INTO_CART:
       if (draft.cartItem.length === 0) {
         draft.cartItem.push({
           ...action.payload,
           quantity: 1
         }  as any)
       } else {
         let isFlag = false
         const data = [...draft.cartItem]?.map(index => {
           if (index?.id === action.payload?.id) {
             isFlag = true
             return {
               ...index,
               quantity: action?.payload?.quantity,
               price: action?.payload?.price
             }
           }
           return index
         })
         if (isFlag == false) {
           draft.cartItem.push({
             ...action.payload,
             quantity: 1
           }  as any)
         }
         else {
           draft.cartItem = data?.filter(index => index?.quantity > 0)
         }
       }
       break
     case types.REMOVE_ITEM_INTO_CART:
       const data = [...draft.cartItem]?.filter(index => index?.id != action.payload?.id)
       draft.cartItem = data
       break
     default:
       return state
   }
 })




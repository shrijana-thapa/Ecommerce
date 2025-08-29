import { createReducer, on } from "@ngrx/store";
import { initialCartState ,cartState} from "./cart.state";
import { actionAddTocart, actionDecreaseQuantity, actionIncreaseQuantity, actionRemoveFromCart } from "./cart.actions";

export const cartReducer=createReducer(initialCartState, on(actionAddTocart, (state,{product})=>{
      const existing = state.items.find(item => item.id === product.id);
    if (existing) {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    }
    return { ...state, items: [...state.items, { ...product, quantity: 1 }] };
  }),

  on(actionRemoveFromCart,(state,{id})=>({
...state,
items: state.items.filter(item=>
  item.id!== id)
})),
on(actionIncreaseQuantity,(state,{product})=>({
  ...state,
  items:state.items.map(item=>item.id === product.id ? {...item,quantity:item.quantity+1}:item

  )
})),

on(actionDecreaseQuantity,(state,{product})=>
({
  ...state,
  items:state.items.map( item =>
    item.id === product.id? {...item,quantity:Math.max(item.quantity-1,1)}:item
  )
}))

);
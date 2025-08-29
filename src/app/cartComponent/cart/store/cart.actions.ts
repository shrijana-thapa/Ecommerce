import { createAction, props } from "@ngrx/store";
import { Product } from "../../../store/product.model";

export const actionAddTocart=createAction('[cart] Add to cart ', props<{product:Product}>());
export const actionRemoveFromCart=createAction('[cart] Remove from cart',props<{id:number}>() );
export const actionIncreaseQuantity=createAction('[cart] increase quantity',props<{product:Product}>());
export const actionDecreaseQuantity=createAction('[cart] decrease quantity',props<{product:Product}>());
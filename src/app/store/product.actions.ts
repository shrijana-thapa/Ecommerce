import { createAction, props } from '@ngrx/store';
import { Product } from './product.model';

// Load products (effect will listen to this)
export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{ products: Product[] }>());
export const loadProductsFailure = createAction('[Product] Load Products Failure', props<{ error: string }>());

// Cart actions
export const addToCart = createAction('[Cart] Add To Cart', props<{ product: Product }>());
export const removeFromCart = createAction('[Cart] Remove From Cart', props<{ productId: number }>());

export const showNotification=createAction('[notification] show',props<{message:string}>());

export const searchProducts=createAction('')

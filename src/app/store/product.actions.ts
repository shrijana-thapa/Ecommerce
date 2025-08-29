import { createAction, props } from '@ngrx/store';
import { Product } from './product.model';

// Load products (effect will listen to this)
export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{ products: Product[] }>());
export const loadProductsFailure = createAction('[Product] Load Products Failure', props<{ error: string }>());



export const showNotification=createAction('[notification] show',props<{message:string}>());


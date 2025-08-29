import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cartState } from './cart.state';

export const selectCartState = createFeatureSelector<cartState>('cart');
export const selectCartItems = createSelector(
  selectCartState,
  (state: cartState | undefined) => state?.items || []
);
export const selectCartCount = createSelector(selectCartItems, (items) =>
  items.reduce((count, item) => count + item.quantity, 0)
);

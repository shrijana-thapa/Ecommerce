import { createReducer, on } from '@ngrx/store';
import { initialProductState } from './product.state';
import * as ProductActions from './product.actions';

export const productReducer = createReducer(
  initialProductState,

  // Loading products
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Cart
  on(ProductActions.addToCart, (state, { product }) => ({
    ...state,
    cart: [...state.cart, product]
  })),
  on(ProductActions.removeFromCart, (state, { productId }) => ({
    ...state,
    cart: state.cart.filter(p => p.id !== productId)
  })),

);

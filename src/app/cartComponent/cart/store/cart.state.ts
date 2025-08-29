import { Product } from '../../../store/product.model';

export interface cartItem extends Product {
  quantity: number;
}

export interface cartState {
  items: cartItem[];
}

export const initialCartState: cartState = {
  items: [],
};

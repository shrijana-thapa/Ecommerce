import { Product } from "./product.model";

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  cart: Product[];
}

export const initialProductState: ProductState = {
  products: [],
  loading: false,
  error: null,
  cart: []
};

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../store/product.model';
import * as ProductActions from '../../store/product.actions';
import { ProductState } from '../../store/product.state';
import * as CartActions from '../../cartComponent/cart/store/cart.actions';
import { cartState } from '../../cartComponent/cart/store/cart.state';
import {
  selectCartCount,
  selectCartItems,
} from '../../cartComponent/cart/store/cart.selectors';
import { cartItem } from '../../cartComponent/cart/store/cart.state';

@Component({
  selector: 'app-ecommerce',
  standalone: false,
  templateUrl: './ecommerce.html',
  styleUrls: ['./ecommerce.scss'],
})
export class EcommerceComponent implements OnInit {
  products$: Observable<Product[]>;
  cartItems$: Observable<cartItem[]>;
  loading$: Observable<boolean>;
  cartCount$: Observable<number>;

  constructor(
    private store: Store<{ product: ProductState; cart: cartState }>
  ) {
    this.products$ = store.select((state) => state['product'].products);
    this.cartItems$ = store.select(selectCartItems);
    this.loading$ = store.select((state) => state['product'].loading);
    this.cartCount$ = store.select(selectCartCount);
  }

  ngOnInit() {
    this.store.dispatch(ProductActions.loadProducts());
  }

  addToCart(product: Product) {
    this.store.dispatch(CartActions.actionAddTocart({ product }));
  }
  getCartCount(cart: cartItem[]): number {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  // onSearch(query:string){
  //   this.store.dispatch(ProductActions.searchProducts({query}))
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  actionAddTocart,
  actionRemoveFromCart,
  actionDecreaseQuantity,
  actionIncreaseQuantity,
} from './store/cart.actions';
import { cartItem, cartState } from './store/cart.state';
import { selectCartCount } from './store/cart.selectors';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cartItems$: Observable<cartItem[]>;
  cartCount$!: Observable<number>;

  constructor(private store: Store<{ cart: cartState }>) {
    this.cartItems$ = this.store.select((state) => state.cart.items);
    this.cartCount$ = this.store.select(selectCartCount);
  }

  removeFromCart(item: any) {
    this.store.dispatch(actionRemoveFromCart({ id: item.id }));
  }

  increaseQuantity(item: any) {
    this.store.dispatch(actionIncreaseQuantity({ product: item }));
  }

  decreaseQuantity(item: any) {
    this.store.dispatch(actionDecreaseQuantity({ product: item }));
  }

  getTotal() {
    let total = 0;
    this.cartItems$
      .subscribe((items) => {
        total = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      })
      .unsubscribe();
    return total;
  }

  checkout() {
    alert('Proceeding to checkout...');
  }

  getCartCount(cart: cartItem[]): number {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

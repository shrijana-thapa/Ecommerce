
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../store/product.model';
import * as ProductActions from '../../store/product.actions'
import { ProductState } from '../../store/product.state';

@Component({
  selector: 'app-ecommerce',
  standalone: false,
  templateUrl: './ecommerce.html',
  styleUrls: ['./ecommerce.scss']
})
export class EcommerceComponent implements OnInit{


  products$: Observable<Product[]>;
  cart$: Observable<Product[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<{ product: ProductState }>) {
   this.products$ = store.select(state => state['product'].products);
this.cart$ = store.select(state => state['product'].cart);
this.loading$ = store.select(state => state['product'].loading);
  }

  ngOnInit() {
    this.store.dispatch(ProductActions.loadProducts());
    
  }

  addToCart(product: Product) {
    this.store.dispatch(ProductActions.addToCart({ product }));
  }

  removeFromCart(id: number) {
    this.store.dispatch(ProductActions.removeFromCart({ productId: id }));
  }
}

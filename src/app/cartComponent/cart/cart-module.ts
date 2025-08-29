import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing-module';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducers';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Cart } from './cart';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [Cart],
  imports: [
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature('cart', cartReducer),
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
  ],
})
export class CartModule {}

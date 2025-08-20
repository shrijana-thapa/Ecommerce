import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { EcommerceRoutingModule } from './ecommerce-routing-module'; 
 import { HttpClientModule } from '@angular/common/http';  import { MatToolbarModule } from '@angular/material/toolbar'; import { MatButtonModule } from '@angular/material/button'; import { MatCardModule } from '@angular/material/card'; import { MatGridListModule } from '@angular/material/grid-list'; import { MatListModule } from '@angular/material/list'; import { MatDividerModule } from '@angular/material/divider'; import { MatIconModule } from '@angular/material/icon'; import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { EcommerceComponent } from './ecommerce';

import { productReducer } from '../../store/product.reducer';
import { ProductEffects } from '../../store/product.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [EcommerceComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    CommonModule, EcommerceRoutingModule, HttpClientModule, MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatDividerModule, MatIconModule, MatProgressSpinnerModule,  
     StoreModule.forFeature('product', productReducer),
EffectsModule.forFeature([ProductEffects])

  ],
  exports:[EcommerceComponent]
})
export class EcommerceModule { }

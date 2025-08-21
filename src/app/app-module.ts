import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';


import { EcommerceModule } from './ecommerce/ecommerce/ecommerce-module';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Login } from './loginComponent/components/login/login';



@NgModule({
  declarations: [
    App,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
 ,EcommerceModule,
       BrowserAnimationsModule,
         StoreModule.forRoot({}),
    EffectsModule.forRoot([]), 
  ],
  providers: [
    
  ],
  bootstrap: [App]
})
export class AppModule { }

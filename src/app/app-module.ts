import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { EcommerceModule } from './ecommerce/ecommerce/ecommerce-module';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Login } from './loginComponent/components/login/login';
import { LoginModule } from './loginComponent/components/login/login-module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from './loginComponent/interceptors/auth-interceptor';
import { Admin } from './admin component/admin/admin';
import { Cart } from './cartComponent/cart/cart';
import { CartModule } from './cartComponent/cart/cart-module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EcommerceModule,
    CartModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
  ],
  bootstrap: [App],
})
export class AppModule {}

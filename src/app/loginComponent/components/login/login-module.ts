import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing-module';
import { Login } from './login';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../../Store/authguard.reducers';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../Store/authguard.effects';


@NgModule({
  declarations: [Login],
  imports: [
    CommonModule,
    LoginRoutingModule,
        FormsModule,
        StoreModule.forFeature('auth',loginReducer),
        EffectsModule.forFeature([AuthEffects])
  ],
  exports:[Login]
})
export class LoginModule { }


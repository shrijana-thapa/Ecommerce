import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing-module';
import { Login } from './login';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../../Store/authguard.reducers';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../Store/authguard.effects';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [Login],
  imports: [
    CommonModule,
    LoginRoutingModule,
        FormsModule,
        StoreModule.forFeature('auth',loginReducer),
        EffectsModule.forFeature([AuthEffects]),
         MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[Login]
})
export class LoginModule { }


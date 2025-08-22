
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../../Store/authguard.state';
import { selectUser, selectLoading, selectError } from '../../Store/authguard.selectors';
import { OnInit } from '@angular/core';
import * as AuthActions from '../../Store/authguard.action'


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

    email = '';
  password = '';
    user$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

    constructor(private store: Store<{ auth: AuthState }>) {
    this.user$ = this.store.select(selectUser);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

   onLogin(event:Event){
    event.preventDefault();
    this.store.dispatch(AuthActions.login({email:this.email,password:this.password}));

   }
}
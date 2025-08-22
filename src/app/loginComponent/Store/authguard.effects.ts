import { inject, Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import * as AuthActions from './authguard.action'
import { catchError, switchMap } from "rxjs";
import { AuthService } from "../services/auth";
import { of,map } from "rxjs";
import { ofType } from "@ngrx/effects";
import { tap } from "rxjs";

@Injectable({
providedIn:'root',
})

export class AuthEffects{

   action$=inject(Actions);

  constructor( private service:AuthService){}

  login$=createEffect( ()=> this.action$.pipe(
    ofType(AuthActions.login), switchMap( action => this.service.login(action.email,action.password).pipe(
      map(res=> AuthActions.loginSuccess({user:{email:res.email,token:res.token}})), catchError(err=> of( AuthActions.loginFailure({error:err.message})))
    
    
    )
    ))

  );
  loginSuccess$=createEffect(
    ()=>
    this.action$.pipe(ofType(AuthActions.loginSuccess),
  tap(action=>{
    localStorage.setItem('authToken',action.user.token);

  //redirect to admin pannel this.router.navigate(['/admin']);
  }
)), {dispatch:false}
  );




}
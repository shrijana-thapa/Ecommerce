import { inject, Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import * as AuthActions from './authguard.action'
import { catchError, switchMap } from "rxjs";
import { AuthService } from "../services/auth";
import { of,map } from "rxjs";
import { ofType } from "@ngrx/effects";

@Injectable({
providedIn:'root',
})

export class AuthEffects{

   action$=inject(Actions);

  constructor( private service:AuthService){}

  login$=createEffect( ()=> this.action$.pipe(
    ofType(AuthActions.login), switchMap( action => this.service.login(action.email,action.password).pipe(
      map(user=> AuthActions.loginSucess({user})), catchError(err=> of( AuthActions.loginFailure({error:err.message})))
    
    
    )
    ))

  );





}
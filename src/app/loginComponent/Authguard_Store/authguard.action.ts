import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";

export const login=createAction('[Auth]login',props<{email:string,password:string}>());
export const loginSucess=createAction('[Auth]Login Sucess',props<{user:{email:string;token:string}}>());
export const loginFailure=createAction('[Auth]Login Failure',props<{error:string}>());
export const logout=createAction('[Auth] Logout');

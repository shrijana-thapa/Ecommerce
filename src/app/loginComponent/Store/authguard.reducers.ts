import { createReducer } from "@ngrx/store";
import { initialState } from "./authguard.state";
import * as AuthActions from './authguard.action';
import { on } from "@ngrx/store";

export const loginReducer=createReducer(initialState,on(AuthActions.login,(state)=>
  ({
    ...state,
     loading:true,
     error:null
  })),
  on(AuthActions.loginSucess,(state,{user})=>
    ({
      ...state,
      user,
      loading:false,
      error:null
    })),
    
    on(AuthActions.loginFailure,(state,{error})=>

        ({
          ...state,
          loading:false,
          error
        })),
      on(AuthActions.logout,(state)=>
        ({
          ...state,
          user:null
        }))

    
    )


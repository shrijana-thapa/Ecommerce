
export interface AuthState{
  user:{email:string;token:string} | null;
  loading:boolean;
  error:string| null;
}

export const initialState:AuthState={
  user:null,
  loading:false,
  error:null
}
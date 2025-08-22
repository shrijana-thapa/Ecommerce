import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(){}

login( email:string,password:string): Observable<{email:string;token:string}>{


if(email==="Shrijana@gmail.com" && password ==="Angular"){
  return of({email,token:'fake-token'}).pipe(delay(1000));
}
else{
  return throwError(()=> new Error ('invalid email or password')).pipe(delay(1000));
}
}


  
}

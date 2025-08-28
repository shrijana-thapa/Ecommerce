import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AuthService } from './auth';

describe('Auth', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('AuthService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return token when email and password are correct',fakeAsync(()=>{
      let result:any;
    service.login('Shrijana@gmail.com','Angular').subscribe(res=>{
      result=res
    })
       tick(1000);
    expect(result).toEqual({email:'Shrijana@gmail.com',token:'fake-token'});
  }));

   it('should return error message when email and password are incorrect',fakeAsync(()=>{
      let result:any;
    service.login('example@gmail.com','nngular').subscribe({
        next:()=>{},
        error:err=>{
          result=err;
        }
    })
       tick(1000);
    expect(result.message).toBe('invalid email or password');
  }));


});

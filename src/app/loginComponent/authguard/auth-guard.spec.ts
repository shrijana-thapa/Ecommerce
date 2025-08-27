import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

import { AuthGuard } from './auth-guard';



describe('AuthGuard', () => {
  const executeGuard: CanActivateFn = () => 
      TestBed.runInInjectionContext(() => new AuthGuard(TestBed.inject(Router)).canActivate());

  
    let spyRouter: jasmine.SpyObj<Router>;
    let guard:AuthGuard;

  beforeEach(() => {
    
    spyRouter=jasmine.createSpyObj('Router',['navigate']);
    
    TestBed.configureTestingModule({
      providers:[AuthGuard,{ provide: Router, useValue: spyRouter }]// give fake router 
    });

   guard =new AuthGuard(spyRouter);
  });

   afterEach(()=>{
    //cleanup localstorage if spy is created
    if((localStorage.getItem as any).and ){
        (localStorage.getItem as jasmine.Spy).and.callThrough();//restore spy behaviour to original
    }
    localStorage.removeItem('authToken');//clear any token
  });

    
  it('should create', () => {
    expect(AuthGuard).toBeTruthy();
  });



  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
   
  it('should allow activation when token exist',()=>{
    spyOn(localStorage,'getItem').and.returnValue('fake-token');
    const result=guard.canActivate();
    expect(result).toBeTrue();
    expect(spyRouter.navigate).not.toHaveBeenCalled();
     
  });

  it('should show alert and navigate to /login and return false when there is no token ',()=>{
    
    spyOn(localStorage,'getItem').and.returnValue(null);
    spyOn(window,'alert');
    const result=guard.canActivate();
    expect(result).toBeFalse();
    expect(window.alert).toHaveBeenCalledWith('Please login to access this page.');
    expect(spyRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
  


});

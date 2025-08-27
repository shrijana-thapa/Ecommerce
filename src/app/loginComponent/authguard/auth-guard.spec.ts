import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

import { AuthGuard } from './auth-guard';

describe('AuthGuard', () => {
  const executeGuard: CanActivateFn = () => 
      TestBed.runInInjectionContext(() => new AuthGuard(TestBed.inject(Router)).canActivate());

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[AuthGuard]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
   
  


});

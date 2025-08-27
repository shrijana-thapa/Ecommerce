import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { AuthState } from '../../Store/authguard.state';
import { By } from '@angular/platform-browser';
import * as AuthActions from '../../Store/authguard.action';
import { FormsModule } from '@angular/forms';



describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
    let store: MockStore<{ auth: AuthState }>;

    const initialState:AuthState={
      user:null,
      loading:false,
      error:null
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Login],
      imports:[FormsModule],
      providers: [provideMockStore({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



    it('should dispatch login action on form submit', () => {
    spyOn(store, 'dispatch');
    component.email = 'test@example.com';
    component.password = '123456';

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', { preventDefault: () => {} });

    expect(store.dispatch).toHaveBeenCalledWith(
      AuthActions.login({ email: 'test@example.com', password: '123456' })
    );
  });

  it('should show loading message when loading true',()=>{
    store.setState({auth:{...initialState,loading:true}});
    fixture.detectChanges();
    const loadingText=fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(loadingText).toContain('Loading...');
  })



  it('should show error message when error exist',()=>{
    store.setState({auth:{...initialState,error:'invalid credentials'}});
    fixture.detectChanges();
    const errorText=fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(errorText).toContain('invalid credentials');
  });

  it('should show welcome message when user exist',()=>{
    store.setState({auth:{...initialState,user:{email:'example@gmail.com',token: 'dummy-token'}}});
      fixture.detectChanges();
      const userText=fixture.debugElement.query(By.css('p')).nativeElement.textContent;
      expect(userText).toContain('welcome example@gmail.com');
  });

  
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceComponent } from './ecommerce';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductState } from '../../store/product.state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('Ecommerce', () => {
  let component: EcommerceComponent;
  let fixture: ComponentFixture<EcommerceComponent>;

  let store:MockStore<{product:ProductState}>;

  const initialState:ProductState={
    products:[],
    cart:[],
    loading:false,
    error:''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcommerceComponent],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers:[provideMockStore({initialState:{product:initialState}})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

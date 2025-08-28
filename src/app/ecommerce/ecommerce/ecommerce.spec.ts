import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceComponent } from './ecommerce';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductState } from '../../store/product.state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as ProductActions from '../../store/product.actions';
import { Product } from '../../store/product.model';
import { By } from '@angular/platform-browser';


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
    store=TestBed.inject(MockStore);
    fixture = TestBed.createComponent(EcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch productload action when on init ',()=>{

   const dispatchSpy=spyOn(store,'dispatch');
     component.ngOnInit();
   expect(dispatchSpy).toHaveBeenCalledWith(ProductActions.loadProducts());
  });

    it('should dispatch addToCart when addToCart() is called', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const product: Product = { id: 2, title: 'Laptop', price: 1000, description: 'Gaming laptop',category:'Electronics', image: 'laptop.jpg' };
    component.addToCart(product);
    expect(dispatchSpy).toHaveBeenCalledWith(ProductActions.addToCart({ product }));
  });
    it('should dispatch removeFromCart when removeFromCart() is called', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.removeFromCart(2);
    expect(dispatchSpy).toHaveBeenCalledWith(ProductActions.removeFromCart({ productId: 2 }));
  });

    it('should show cart count in button', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button[color="accent"]')).nativeElement;
    expect(button.textContent).toContain('Cart (0)');
  });
});

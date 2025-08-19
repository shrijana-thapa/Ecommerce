import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecommerce } from './ecommerce';

describe('Ecommerce', () => {
  let component: Ecommerce;
  let fixture: ComponentFixture<Ecommerce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ecommerce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ecommerce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

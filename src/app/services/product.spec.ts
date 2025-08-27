import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service'; // Import the actual service
import { Product } from '../store/product.model'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService],
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
    httpMock=TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(ProductService).toBeTruthy();
  });
});

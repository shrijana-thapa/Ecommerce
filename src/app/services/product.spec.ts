import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service'; // Import the actual service
import { Product } from '../store/product.model'

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

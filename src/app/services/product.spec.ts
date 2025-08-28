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

 afterEach(  ()=>{
  httpMock.verify();
 })


 it('should have correct API url', () => {
  expect((service as any).api).toBe('https://fakestoreapi.com/products?limit=5');
});


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch products from api',()=>{

    const mockProducts:Product[]=[
      { id: 1, title: 'Shirt', price: 20, description: 'Cotton shirt', category: 'clothes', image: 'shirt.jpg' },
      { id: 2, title: 'Shoes', price: 50, description: 'Running shoes', category: 'shoes', image: 'shoes.jpg' }

    ];

   service.getProduct().subscribe((products)=>{
    expect(products.length).toBe(2);
    expect(products).toEqual(mockProducts);
   })


      const req = httpMock.expectOne('https://fakestoreapi.com/products?limit=5');
      expect(req.request.method).toBe('GET');  
    req.flush(mockProducts);
  });

it('should handle error if API fails', () => {
  service.getProduct().subscribe({
    next: () => fail('expected error, not products'),
    error: (err) => {
      expect(err.status).toBe(500);
      expect(err.statusText).toBe('Internal Server Error');
    }
  });

  const req = httpMock.expectOne('https://fakestoreapi.com/products?limit=5');
  req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });
});

it('should return empty array when API returns no products', () => {
  service.getProduct().subscribe((products) => {
    expect(products).toEqual([]);
  });

  const req = httpMock.expectOne('https://fakestoreapi.com/products?limit=5');
  req.flush([]);
});

});

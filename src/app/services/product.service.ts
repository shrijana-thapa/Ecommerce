import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../store/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api='https://fakestoreapi.com/products?limit=5';
  constructor(private http:HttpClient){}

  getProduct():Observable<Product[]>{
   return  this.http.get<Product[]>(this.api);
  }
  
}


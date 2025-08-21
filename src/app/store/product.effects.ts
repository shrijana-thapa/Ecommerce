import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { ProductService } from '../services/product.service';


@Injectable()
export class ProductEffects {

private actions$ = inject(Actions)
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.service.getProduct().pipe(
          map(products => ProductActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductActions.loadProductsFailure({ error: error.message })))
        )
      )
    )
  );


  

    constructor( private http: HttpClient,private service:ProductService) {}
}

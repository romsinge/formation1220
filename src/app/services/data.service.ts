import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get products(): Observable<Product[]> {
    // return <Observable<Product[]>>this.http.get('http://localhost:3000/products')
    // return this.http.get('http://localhost:3000/products') as Observable<Product[]>

    // let getProducts$ = this.http.get<Product[]>('http://localhost:3000/products')

    // getProducts$.subscribe({
    //   error: (err) => {
    //     console.log('ERROR :', err)
    //   }
    // })

    // return getProducts$

    return this.http.get<Product[]>('http://localhost:3000/products').pipe(catchError((err) => {
      console.log(err)
      return throwError(err)
    }))
  }

  getProductById(id: number): Observable<Product> {
    return this.products.pipe(map((products => {
      return products.find((product) => {
        return product.id == id
      })
    })))
  }

  isProductTitleAvailable(title: string): Observable<boolean> {
    return this.products.pipe(map(products => {
      return !products.find((product) => {
        return product.title == title
      })
    }))
  }

  private _products: Product[] = []
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get products(): Observable<Product[]> {
    // return <Observable<Product[]>>this.http.get('http://localhost:3000/products')
    // return this.http.get('http://localhost:3000/products') as Observable<Product[]>
    return this.http.get<Product[]>('http://localhost:3000/products')
  }

  getProductById(id: number): Observable<Product> {
    return this.products.pipe(map((products => {
      return products.find((product) => {
        return product.id == id
      })
    })))
  }

  private _products: Product[] = []
}

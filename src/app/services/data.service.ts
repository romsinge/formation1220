import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  get products(): Observable<Product[]> {
    return new Observable((observer) => {
      observer.next(this._products)
      observer.complete()
    })
  }

  getProductById(id: number): Observable<Product> {
    return this.products.pipe(map((products => {
      return products.find((product) => {
        return product.id == id
      })
    })))
  }

  private _products: Product[] = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}]
}

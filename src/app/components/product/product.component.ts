import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productData: Product = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  }

  handleDetailsClick() {
    console.log('Details')
  }

  handleCartClick() {
    console.log('Cart')
  }

  constructor() {}

  ngOnInit(): void {
  }

}

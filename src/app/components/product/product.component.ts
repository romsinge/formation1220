import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productData: Product

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

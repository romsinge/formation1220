import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {

  @Input() imageUrl: string = ''
  @Output() cartClick: EventEmitter<any> = new EventEmitter()
  @Output() detailsClick: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleDetailsClick(): void {
    this.detailsClick.emit()
  }

  handleCartClick(): void {
    this.cartClick.emit()
  }
}

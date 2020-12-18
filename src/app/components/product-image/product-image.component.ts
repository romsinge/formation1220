import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductImageComponent {

  @Input() imageUrl: string = ''
  @Output() cartClick: EventEmitter<any> = new EventEmitter()
  @Output() detailsClick: EventEmitter<any> = new EventEmitter()

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cdr.detach()
  }

  handleDetailsClick(): void {
    this.detailsClick.emit()
  }

  handleCartClick(): void {
    this.cartClick.emit()
  }
}

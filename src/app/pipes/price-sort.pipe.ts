import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'priceSort'
})
export class PriceSortPipe implements PipeTransform {

  transform(items: { price: number }[]): any[] {
    return items && items.length ? items.sort((a, b) => a.price - b.price) : []
  }

}

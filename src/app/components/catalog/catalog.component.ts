import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service'
import { fromEvent, Observable } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators'
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  @ViewChild('searchInput') searchInputRef: ElementRef

  search$: Observable<string>
  products: Product[] = []

  ngAfterViewInit(): void {
    this.search$ = fromEvent<string>(this.searchInputRef.nativeElement, 'keyup')
      .pipe(debounceTime(1000))
      .pipe(map((event: any) => event.target.value))
  }

  ngOnInit(): void {
    this.products = this.dataService.products
  }

  constructor(private dataService: DataService) {}

}

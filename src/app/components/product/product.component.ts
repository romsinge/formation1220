import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productData: Product
  asyncProductData$: Observable<Product>
  isDetails: boolean = false

  handleDetailsClick() {
    this.router.navigate(['/details', this.productData.id])
  }

  handleCartClick() {
    console.log('Cart')
  }

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.asyncProductData$ = this.route.params.pipe(switchMap((params => {
      this.isDetails = true
      return this.dataService.getProductById(params.id)
    })))
  }

}

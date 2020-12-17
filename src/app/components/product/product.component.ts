import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productData: Product

  handleDetailsClick() {
    this.router.navigate(['/details', this.productData.id])
  }

  handleCartClick() {
    console.log('Cart')
  }

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        if (params.id) {
          this.productData = this.dataService.getProductById(params.id)
        }
      }
    })
  }

}

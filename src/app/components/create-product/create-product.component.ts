import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { ValidationService } from '../../services/validation.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup

  constructor(
    public validationS: ValidationService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl('', [ Validators.required ], [ this.validationS.isTitleAvailable() ]),
      price: new FormControl(0, [ this.validationS.moreThanZero ])
    })
  }

  handleSubmit() {
    this.dataService.saveProduct(this.productForm.value).subscribe({
      next: (product: Product) => {
        this.router.navigateByUrl('/catalog')
      }
    })
  }

}

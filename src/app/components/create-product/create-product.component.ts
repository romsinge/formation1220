import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { ValidationService } from '../../services/validation.service'
import { SubSink } from 'subsink'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup
  subsink: SubSink = new SubSink()

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
    this.subsink.add(this.dataService.saveProduct(this.productForm.value).pipe(first()).subscribe({
      next: (product: Product) => {
        this.router.navigateByUrl('/catalog')
      }
    }))
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe()
  }

}

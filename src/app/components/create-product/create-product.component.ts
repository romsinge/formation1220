import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../services/validation.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup

  constructor(private validationS: ValidationService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl('', [ Validators.required ]),
      price: new FormControl(0, [ this.validationS.moreThanZero ])
    })
  }

  handleSubmit() {
    console.log(this.productForm)
  }

}

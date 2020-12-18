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
      title: new FormControl('', [ Validators.required ], [ this.validationS.isTitleAvailable() ]),
      price: new FormControl(0, [ this.validationS.moreThanZero ])
    })

    // EX 1: creer un validateur pour title asynchrone qui verifie que le nom n'est pas deja pris dans la db (utiliser dataService)
    // EX 2 : enregistrer le nouveau produit cree dans la db
    // EX 3 : creer un objet errorMessages et qui permet d'afficher dynamiquement les messages d'erreur
  }

  handleSubmit() {
    console.log(this.productForm)
  }

}

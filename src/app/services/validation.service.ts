import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  moreThanZero(control: FormControl): ValidationErrors | undefined {
    return control.value && control.value > 0 ? undefined : {
      moreThanZero: true
    }
  }

  constructor() { }
}

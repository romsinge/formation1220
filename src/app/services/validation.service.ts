import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  errorMessages: any = {
    required: "Field required",
    moreThanZero: "Must be more than zero",
    isTitleAvailable: "Title must be new"
  }

  moreThanZero(control: FormControl): ValidationErrors | undefined {
    return control.value && control.value > 0 ? undefined : {
      moreThanZero: true
    }
  }

  isTitleAvailable() {
    return (control: FormControl) => {
      return this.dataService.isProductTitleAvailable(control.value)
        .pipe(map(isAvailable => {
          return isAvailable ? undefined : {
            isTitleAvailable: true
          }
        }))
    }
  }

  constructor(private dataService: DataService) { }
}

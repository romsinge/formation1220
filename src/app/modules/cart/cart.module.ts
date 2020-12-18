import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CartComponent } from 'src/app/components/cart/cart.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: CartComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class CartModule { }

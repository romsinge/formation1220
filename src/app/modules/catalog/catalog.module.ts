import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CatalogComponent } from 'src/app/components/catalog/catalog.component';
import { ProductComponent } from 'src/app/components/product/product.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: CatalogComponent
  },
  {
      path: 'details/:id',
      component: ProductComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CatalogModule { }

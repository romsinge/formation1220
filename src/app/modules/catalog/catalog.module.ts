import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CatalogComponent } from 'src/app/components/catalog/catalog.component';
import { ProductComponent } from 'src/app/components/product/product.component';
import { CreateProductComponent } from 'src/app/components/create-product/create-product.component'

const ROUTES: Route[] = [
  {
    path: '',
    component: CatalogComponent
  },
  {
      path: 'details/:id',
      component: ProductComponent
  },
  {
      path: 'create',
      component: CreateProductComponent
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CatalogComponent } from 'src/app/components/catalog/catalog.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: CatalogComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CatalogModule { }

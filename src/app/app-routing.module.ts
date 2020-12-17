import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router'
import { CatalogComponent } from './components/catalog/catalog.component'
import { CartComponent } from './components/cart/cart.component'
import { ProductComponent } from './components/product/product.component';

const ROUTES: Route[] = [
    {
        path: 'catalog',
        component: CatalogComponent
    },
    {
        path: 'details/:id',
        component: ProductComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '**',
        redirectTo: 'catalog'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }

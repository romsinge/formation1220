import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router'
import { CatalogComponent } from './components/catalog/catalog.component'
import { CartComponent } from './components/cart/cart.component'
import { ProductComponent } from './components/product/product.component';

const ROUTES: Route[] = [
    {
        path: 'catalog',
        loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule)
    },
    {
        path: 'details/:id',
        component: ProductComponent
    },
    {
        path: 'cart',
        loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)
    },
    {
        path: '**',
        redirectTo: 'catalog'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }

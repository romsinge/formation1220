import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router'

const ROUTES: Route[] = [
    {
        path: 'catalog',
        loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule)
    },
    {
        path: 'cart',
        loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
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

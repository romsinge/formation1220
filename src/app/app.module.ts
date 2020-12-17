import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { HiddenDisplayDirective } from './directives/hidden-display.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './modules/material-components/material-components.module';
import { UrlBeautifierPipe } from './pipes/url-beautifier.pipe'
import { FormsModule } from '@angular/forms';
import { PriceSortPipe } from './pipes/price-sort.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CartComponent } from './components/cart/cart.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductImageComponent,
    HiddenDisplayDirective,
    UrlBeautifierPipe,
    PriceSortPipe,
    SearchPipe,
    CartComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

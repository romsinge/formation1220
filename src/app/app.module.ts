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

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductImageComponent,
    HiddenDisplayDirective,
    UrlBeautifierPipe,
    PriceSortPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

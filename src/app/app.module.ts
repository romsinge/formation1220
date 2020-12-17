import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { HiddenDisplayDirective } from './directives/hidden-display.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductImageComponent,
    HiddenDisplayDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

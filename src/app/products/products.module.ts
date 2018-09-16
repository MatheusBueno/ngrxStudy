import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './containers/products/products.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', reducers),
  ],
  declarations: [ProductsComponent],
  providers: [],
  exports: [ProductsComponent],
})
export class ProductModule { }

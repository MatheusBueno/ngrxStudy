import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', reducers),
  ],
  declarations: [],
  providers: [],
  exports: [],
})
export class ProductModule { }

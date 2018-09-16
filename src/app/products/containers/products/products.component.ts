import { OnInit, Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

@Component({
  selector: 'app-products',
  styleUrls: ['products.component.css'],
  templateUrl: 'products.component.html',
})
export class ProductsComponent implements OnInit {

  public pizzas$: Observable<any>;

  constructor(
    private store: Store<fromStore.ProductsState>
  ) { }

  ngOnInit() {
    this.pizzas$ = this.store.select<any>(fromStore.getAllPizzas);
  }
}

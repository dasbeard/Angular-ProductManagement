import { Injectable } from '@angular/core';
import 'rxjs';

import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductsService {
  productObservable = new BehaviorSubject(null);

  constructor() { }

  updateProducts(products: Array<Product>) {
    this.productObservable.next(products);
  }
}

import { Component } from '@angular/core';

import { ProductsService } from './products.service';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  products = [
    new Product(1, 'Item1', 50.00, 'https://www.fillmurray.com/240/260'),
    new Product(2, 'Item2', 75.00, 'https://www.fillmurray.com/220/240'),
  ];

  constructor(private _productService: ProductsService) {
    this._productService.updateProducts(this.products);
    this._productService.productObservable.subscribe(
      (products) => {
        this.products = products;
      });
    console.log(this.products);

  }


}

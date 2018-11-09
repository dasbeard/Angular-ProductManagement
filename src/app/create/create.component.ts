import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  products: Array<Product>;
  newProduct: Product = new Product();

  constructor(
    private _productsService: ProductsService,
    private _routes: Router
  ) {
    this._productsService.productObservable.subscribe(
      (products) => { this.products = products }
    )
  }

  ngOnInit() {

  }

  addProduct() {
    this.products.push(this.newProduct);
    this._productsService.updateProducts(this.products);
    this._routes.navigate(['products'])

  }

}

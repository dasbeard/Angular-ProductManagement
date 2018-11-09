import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  products: Array<Product>;
  product: Product;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductsService,
    private _router: Router
  ) {
    this._productService.productObservable.subscribe(
      (products) => { this.products = products }
    )

    this._route.params.subscribe(
      param => {
        for (let idx = 0; idx < this.products.length; idx++) {
          if (this.products[idx].id == param.id) {
            this.product = this.products[idx];
            break;
          }
        }
      }
    )
  }

  ngOnInit() { }

  updateProduct() {
    this._productService.updateProducts(this.products);
    this._router.navigate(['/products']);
  }

  deleteProduct(product) {
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._productService.updateProducts(this.products);
    this._router.navigate(['/products']);

  }

}

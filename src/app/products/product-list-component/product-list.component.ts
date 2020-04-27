import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product-component/products.service';
import { ProductModel } from '../product-component/product.model';
import { CartService } from '../../cart/cart.service';


@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.scss' ]
})
export class ProductListComponent implements OnInit {
  products?: Array<ProductModel>;
  constructor(
    private productService: ProductsService,
    private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  private getProducts() {
    return this.productService.getProducts();
  }

  onBuyProductEventHandler(value: ProductModel) {
    this.cartService.addProduct(value);
  }
}

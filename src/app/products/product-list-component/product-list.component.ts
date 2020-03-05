import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product-component/products.service';
import { ProductModel } from '../product-component/ProductModel';
import { CartService } from '../../cart/cart.service';


@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.scss' ]
})
export class ProductListComponent implements OnInit {
  productService: ProductsService;
  cartService: CartService;
  products?: Array<ProductModel>;

  constructor(productService: ProductsService, cartService: CartService) {
    this.productService = productService;
    this.cartService = cartService;
  }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts() {
    return this.productService.getProducts();
  }

  buyProductEventHandler(value: ProductModel) {
    this.cartService.setProduct(value);
  }
}

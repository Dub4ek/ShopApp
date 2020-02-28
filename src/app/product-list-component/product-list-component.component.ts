import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from '../product-component/products-service.service';
import {ProductModel} from "../product-component/ProductModel";


@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  productService: ProductsServiceService;
  products?: Array<ProductModel>;

  constructor(private productService: ProductsServiceService) {
    this.productService = productService;
  }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts() {
    return this.productService.getProducts();
  }
}

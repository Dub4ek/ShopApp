import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../product-component/ProductModel';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartService: CartService;
  cartCollection?: Array<ProductModel>;
  isProductsExist = false;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit(): void {
    this.cartCollection = this.cartService.getProducts();
    this.isProductsExist = this.cartCollection.length > 0;
  }
}

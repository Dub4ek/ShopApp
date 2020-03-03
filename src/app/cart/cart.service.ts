import { Injectable } from '@angular/core';
import {ProductModel} from '../product-component/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  static cartCollection: Array<string> = ['gloves'];

  getProducts(): Array<ProductModel> {
    return CartService.cartCollection.map(item => new ProductModel(item));
  }
}

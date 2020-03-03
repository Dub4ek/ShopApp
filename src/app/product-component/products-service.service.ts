import { Injectable } from '@angular/core';
import {ProductModel} from './ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  static productsCollection: Array<string> = ['T-shirt', 'Suit', 'Shoes', 'Accessories'];

  constructor() {

  }

  getProducts(): Array<ProductModel> {
    return ProductsServiceService.productsCollection.map(item => new ProductModel(item));
  }
}

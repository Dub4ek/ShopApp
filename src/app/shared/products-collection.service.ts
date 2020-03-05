import { Injectable } from '@angular/core';
import { ProductModel } from '../products/product-component/ProductModel';
import { Categories } from '../first-component/Categories';

@Injectable({
  providedIn: 'root'
})
export class ProductsCollectionService {
  data: Array<ProductModel> = [];

  constructor() {
    this.data = Array.from(Array(10).keys())
    .map((item, index) => new ProductModel(
      index.toString(),
      `Name${index}`,
      `Product${index} description`,
      Math.pow(index, index),
      Categories.FirstCategory,
      Boolean(Math.random() > 0.5),
    ));
  }

  getData(): Array<ProductModel> {
    return this.data;
  }
}

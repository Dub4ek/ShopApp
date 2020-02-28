import {Categories} from '../first-component/Categories';

export class ProductModel {
  name: string;
  price?: number;
  description?: string;
  category?: Categories;

  constructor(name: string, description?: string, price?: number, category?: Categories) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}

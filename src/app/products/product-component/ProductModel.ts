import { Categories } from '../../first-component/Categories';


export class ProductModel {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
  category?: Categories;
  available?: boolean;

  constructor(id: string, name?: string, description?: string, price?: number, category?: Categories, available?: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.available = available;
  }
}

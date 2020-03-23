import { Categories } from '../../first-component/Categories';

export class ProductModel {
  // id?: string;
  // name?: string;
  // price?: number;
  // description?: string;
  // category?: Categories;
  // available?: boolean;

  constructor(
    public id: string,
    public name?: string,
    public description?: string,
    public price?: number,
    public category?: Categories,
    public available?: boolean
  ) {
    // this.id = id;
    // this.name = name;
    // this.description = description;
    // this.price = price;
    // this.category = category;
    // this.available = available;
  }
}
// навзание файла должно быть product.model.ts

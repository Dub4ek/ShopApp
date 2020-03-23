import { ProductModel } from '../products/product-component/ProductModel';
import { Categories } from '../first-component/Categories';

export class CartModel extends ProductModel {
  // count?: number;

  constructor(
    id: string,
    name?: string,
    description?: string,
    price?: number,
    category?: Categories,
    available?: boolean,
    public count?: number
  ) {
    super(id, name, description, price, category, available);

    // this.count = count;
  }
}
// название файла cart.model.ts

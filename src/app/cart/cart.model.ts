import { ProductModel } from '../products/product-component/product.model';
import { Categories } from '../first-component/Categories';

export class CartModel extends ProductModel {
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
  }
}

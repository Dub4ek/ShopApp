import { Categories } from '../../first-component/Categories';

export class ProductModel {
  constructor(
    public id: string,
    public name?: string,
    public description?: string,
    public price?: number,
    public category?: Categories,
    public available?: boolean
  ) {
  }
}

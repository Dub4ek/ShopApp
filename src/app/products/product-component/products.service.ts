import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductsCollectionService } from '../../shared/products-collection.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  data: Array<ProductModel> = [];

  constructor(private productsCollectionService: ProductsCollectionService) {
    this.data = this.productsCollectionService.getData();
  }

  getProducts(): Array<ProductModel> {
    return this.data;
  }
}

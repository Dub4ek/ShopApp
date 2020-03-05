import { Injectable } from '@angular/core';
import { ProductModel } from './ProductModel';
import { ProductsCollectionService } from '../../shared/products-collection.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsCollectionService: ProductsCollectionService;
  data: Array<ProductModel> = [];

  constructor(productsCollectionService: ProductsCollectionService) {
    this.productsCollectionService = productsCollectionService;
    this.data = this.productsCollectionService.getData();
  }

  getProducts(): Array<ProductModel> {
    return this.data;
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartModel } from './CartModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private data: Array<CartModel> = [];
  private cartCollectionSource = new Subject<Array<CartModel>>();

  cartCollectionChanged$ = this.cartCollectionSource.asObservable();

  setProduct(value: CartModel): void {
    if (!this.data.map(item => item.id).includes(value.id)) {
      this.data.push(value);
      this.cartCollectionSource.next(this.data);
    }
  }

  removeProduct(valueId: string) {
    this.data = this.data.filter(item => item.id !== valueId);
    this.cartCollectionSource.next(this.data);
  }

  updateProduct(value: CartModel) {
    this.data = this.data.map(item => {
      if (item.id === value.id) {
        return value;
      }

      return item;
    });

    this.cartCollectionSource.next(this.data);
  }

  getCartCost(): number {
    return this.data
      .map(products => {
        if (products.price && products.count) {
          return products.price * products.count;
        }

        return 0;
      })
      .reduce((prev, cur) => {
        if (prev !== undefined && cur !== undefined) {
          return prev + cur;
        }

        return prev;
      }, 0);
  }

  getProductsCount(): number {
    return this.data.length;
  }
}

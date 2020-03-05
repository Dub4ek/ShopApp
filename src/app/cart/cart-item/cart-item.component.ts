import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartModel } from '../CartModel';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product?: CartModel;
  @Output() deleteCartItemEvent = new EventEmitter<CartModel>();
  @Output() changeCartItemCountEvent = new EventEmitter<CartModel>();

  countItem = 1;

  deleteButtonClickHandler() {
    this.deleteCartItemEvent.emit(this.product);
  }

  countItemsChangeHandler(value: string) {
    this.countItem = parseInt(value, 10);

    if (this.product) {
      this.product.count = this.countItem;
    }
    this.changeCartItemCountEvent.emit(this.product);
  }
}

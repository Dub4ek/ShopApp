import { Component, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { CartModel } from '../CartModel';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnDestroy {
  // cartService: CartService;
  cartCollection?: Array<CartModel>;
  isProductsExist = false;
  productsCount = 0;
  cartCost: number | undefined = 0;

  private subscription: Subscription;


  constructor(private cartService: CartService) {
    // this.cartService = cartService;
    this.subscription = this.cartService.cartCollectionChanged$.subscribe(this.cardCollectionChanged.bind(this));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private cardCollectionChanged(item: Array<CartModel>) {
    this.cartCollection = item;
    this.isProductsExist = this.cartCollection.length > 0;
    this.cartCost = this.cartService.getCartCost();
    this.productsCount = this.cartService.getProductsCount();
  }

  deleteCartItemEventHandler(value: CartModel) {
    const { id: productId = '' } = value;

    this.cartService.removeProduct(productId);
  }

  changeItemCountEvent(value: CartModel) {
    this.cartService.updateProduct(value);
  }
}
